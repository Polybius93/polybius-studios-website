import { Grid } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

import { LiquidGlassOverlay } from "./liquid-glass-overlay";

const sectionIntro = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const animationDelays: Record<string, string> = {
  about: "0ms",
  contact: "450ms",
  experience: "150ms",
  "technical-expertise": "300ms",
};

export const SectionContainer = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <Grid
      alignItems="flex-start"
      animation={`${sectionIntro} 650ms ease-out both`}
      animationDelay={animationDelays[id] ?? "0ms"}
      backdropFilter="blur(20px) saturate(140%)"
      border="1px solid transparent"
      borderRadius="1rem"
      boxShadow="0 6px 6px rgb(0 0 0 / 0.12), 0 0 20px rgb(0 0 0 / 0.08)"
      css={{
        "& > :not([aria-hidden='true'])": {
          minWidth: 0,
          position: "relative",
          zIndex: 3,
        },
        "@media (prefers-reduced-motion: reduce)": {
          animation: "none !important",
        },
      }}
      gap="8"
      id={id}
      isolation="isolate"
      minW="0"
      overflow="hidden"
      position="relative"
      px={{ base: "4", lg: "15%", md: "8" }}
      py="1.25rem"
      templateColumns={{
        base: "minmax(0, 1fr)",
        lg: "repeat(2, minmax(0, 1fr))",
      }}
      w="100%"
    >
      <LiquidGlassOverlay />
      {children}
    </Grid>
  );
};
