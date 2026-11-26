import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface ContactFormData {
  captchaToken: string;
  email: string;
  message: string;
}

const submitContactMessage = async (
  formData: ContactFormData,
): Promise<void> => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Contact form is not configured yet.");
  }

  const requestData = new FormData();
  requestData.set("access_key", accessKey);
  requestData.set("email", formData.email.trim());
  requestData.set("from_name", "Polybius Studios Website");
  requestData.set("message", formData.message.trim());
  requestData.set("subject", "New Website Contact Message");
  requestData.set("h-captcha-response", formData.captchaToken);

  await axios.post<unknown>("https://api.web3forms.com/submit", requestData, {
    headers: { Accept: "application/json" },
  });
};

export const useContactMutation = () =>
  useMutation({
    mutationFn: submitContactMessage,
    mutationKey: ["contact"],
  });
