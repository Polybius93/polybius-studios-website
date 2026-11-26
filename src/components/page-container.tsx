import { VStack } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";

import { CodeBackdrop } from "./code-backdrop";
import { GradientBorder } from "./gradient-border";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <CodeBackdrop variant="large" />
      <CodeBackdrop variant="medium" />
      <CodeBackdrop variant="small" />
      <VStack
        gap="24"
        pb="12.5%"
        position="relative"
        pt="2.5%"
        px="5%"
        w="100%"
        zIndex="1"
      >
        <GradientBorder />
        {children}
      </VStack>
    </Fragment>
  );
};
