import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "./components/toaster";
import "./fonts.css";
import { routeTree } from "./routeTree.gen";
import { system } from "./theme.ts";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ChakraProvider value={system}>
          <RouterProvider router={router} />
          <Toaster />
        </ChakraProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
