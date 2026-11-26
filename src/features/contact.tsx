import { Button, Field, Input, Textarea, VStack } from "@chakra-ui/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "@tanstack/react-form";
import { useTheme } from "next-themes";
import { useState } from "react";
import { z } from "zod";

import { useContactMutation } from "@/api/contact";
import { SectionContainer } from "@/components/section-container";
import { SectionHeader } from "@/components/section-header";
import { toaster } from "@/components/toaster-store";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Please enter your email address.")
  .pipe(z.email("Enter a valid email address."));
const messageSchema = z.string().trim().min(1, "Please enter a message.");

export const Contact = () => {
  const { resolvedTheme } = useTheme();
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [captchaWidgetKey, setCaptchaWidgetKey] = useState(0);
  const contactMutation = useContactMutation();

  const form = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
    onSubmit: ({ value }) => {
      if (!captchaToken) {
        setCaptchaError("Please complete the captcha.");
        return;
      }

      setCaptchaError("");
      contactMutation.mutate(
        { ...value, captchaToken },
        {
          onSettled: () => {
            setCaptchaToken("");
            setCaptchaWidgetKey((key) => key + 1);
          },
          onSuccess: () => {
            form.reset();
            toaster.create({
              description:
                "thank you for reaching out. i'll get back to you soon.",
              title: "message sent",
              type: "success",
            });
          },
        },
      );
    },
  });

  return (
    <SectionContainer id="contact">
      <SectionHeader align="right" title="contact" />
      <VStack align="flex-start" gap="4" w="100%">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            void form.handleSubmit();
          }}
          style={{ width: "100%" }}
        >
          <VStack align="stretch" gap="4" w={{ base: "100%", md: "75%" }}>
            <form.Field
              name="email"
              validators={{
                onBlur: emailSchema,
                onSubmit: emailSchema,
              }}
            >
              {(field) => (
                <Field.Root
                  invalid={field.state.meta.errors.length > 0}
                  required
                >
                  <Field.Label
                    fontSize={{ base: "sm", md: "md" }}
                    htmlFor={field.name}
                  >
                    email
                  </Field.Label>
                  <Input
                    autoComplete="email"
                    fontSize="sm"
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(event) => {
                      const email = event.target.value;
                      contactMutation.reset();
                      if (!email.trim() || !form.state.values.message.trim()) {
                        setCaptchaToken("");
                        setCaptchaError("");
                        setCaptchaWidgetKey((key) => key + 1);
                      }
                      field.handleChange(email);
                    }}
                    placeholder="john.doe@example.com"
                    type="email"
                    value={field.state.value}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <Field.ErrorText>
                      {field.state.meta.errors[0]?.message}
                    </Field.ErrorText>
                  )}
                </Field.Root>
              )}
            </form.Field>
            <form.Field
              name="message"
              validators={{
                onBlur: messageSchema,
                onSubmit: messageSchema,
              }}
            >
              {(field) => (
                <Field.Root
                  invalid={field.state.meta.errors.length > 0}
                  required
                >
                  <Field.Label fontSize="sm" htmlFor={field.name}>
                    message
                  </Field.Label>
                  <Textarea
                    fontSize="sm"
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(event) => {
                      const message = event.target.value;
                      contactMutation.reset();
                      if (!message.trim() || !form.state.values.email.trim()) {
                        setCaptchaToken("");
                        setCaptchaError("");
                        setCaptchaWidgetKey((key) => key + 1);
                      }
                      field.handleChange(message);
                    }}
                    placeholder="your message here..."
                    rows={4}
                    value={field.state.value}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <Field.ErrorText>
                      {field.state.meta.errors[0]?.message}
                    </Field.ErrorText>
                  )}
                </Field.Root>
              )}
            </form.Field>
            <form.Subscribe
              selector={(state) =>
                Boolean(
                  state.values.email.trim() && state.values.message.trim(),
                )
              }
            >
              {(showCaptcha) =>
                showCaptcha && (
                  <HCaptcha
                    key={captchaWidgetKey}
                    onError={() => {
                      setCaptchaToken("");
                      setCaptchaError(
                        "Captcha verification failed. Please try again.",
                      );
                    }}
                    onExpire={() => setCaptchaToken("")}
                    onVerify={(token) => {
                      setCaptchaToken(token);
                      setCaptchaError("");
                    }}
                    reCaptchaCompat={false}
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    theme={resolvedTheme === "dark" ? "dark" : "light"}
                  />
                )
              }
            </form.Subscribe>
            {captchaError && (
              <Field.Root invalid>
                <Field.ErrorText>{captchaError}</Field.ErrorText>
              </Field.Root>
            )}
            <Button
              disabled={contactMutation.isPending}
              fontSize="sm"
              loading={contactMutation.isPending}
              onClick={() => void form.handleSubmit()}
              size="lg"
              type="button"
              variant="subtle"
              w="100%"
            >
              send
            </Button>
            {contactMutation.isError && (
              <Field.Root invalid>
                <Field.ErrorText>
                  {contactMutation.error.message}
                </Field.ErrorText>
              </Field.Root>
            )}
          </VStack>
        </form>
      </VStack>
    </SectionContainer>
  );
};
