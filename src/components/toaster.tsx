import { Toaster as ChakraToaster, Toast } from "@chakra-ui/react";

import { toaster } from "./toaster-store";

export const Toaster = () => (
  <ChakraToaster toaster={toaster}>
    {(toast) => (
      <Toast.Root
        background="linear-gradient(90deg, #009FBD 0%, #4A249D 100%)"
        color="white"
        key={toast.id}
        w="min(24rem, calc(100vw - 2rem))"
      >
        {toast.title && <Toast.Title color="white">{toast.title}</Toast.Title>}
        {toast.description && (
          <Toast.Description color="white">
            {toast.description}
          </Toast.Description>
        )}
        <Toast.CloseTrigger />
      </Toast.Root>
    )}
  </ChakraToaster>
);
