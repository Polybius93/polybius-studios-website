import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

import { CODE_FRAME_COLLECTION } from "@/constants/code-frame";

interface CodeBackdropProps {
  variant: "large" | "medium" | "small";
}

const codeFrameCollection = keyframes`
  to {
    transform: translateY(-80%);
  }
`;

const variantStyleCollection = {
  large: {
    delay: "0s",
    duration: "3.2s",
    fontSize: "clamp(2rem, 5vw, 4rem)",
    height: "min(26rem, 58vh)",
    left: "30%",
    mobile: { height: "34vh", top: "25%", width: "92vw" },
    top: "26%",
    width: "min(48rem, 78vw)",
  },
  medium: {
    delay: "-0.8s",
    duration: "2.6s",
    fontSize: "clamp(1.5rem, 3.8vw, 3rem)",
    height: "min(18rem, 40vh)",
    left: "78%",
    mobile: { height: "26vh", top: "58%", width: "68vw" },
    top: "64%",
    width: "min(30rem, 50vw)",
  },
  small: {
    delay: "-2.1s",
    duration: "4s",
    fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
    height: "min(14rem, 34vh)",
    left: "18%",
    mobile: { height: "20vh", top: "80%", width: "54vw" },
    top: "72%",
    width: "min(24rem, 42vw)",
  },
} as const;

export const CodeBackdrop = ({ variant }: CodeBackdropProps) => {
  const styles = variantStyleCollection[variant];

  return (
    <Box
      aria-hidden="true"
      boxSizing="border-box"
      css={{
        "@media (max-width: 640px)": styles.mobile,
      }}
      h={styles.height}
      left={styles.left}
      opacity={0.4}
      overflow="hidden"
      p="1rem"
      pointerEvents="none"
      position="fixed"
      top={styles.top}
      transform="translate(-50%, -50%)"
      w={styles.width}
      zIndex="0"
    >
      <Box
        animation={`${codeFrameCollection} ${styles.duration} steps(4, end) infinite`}
        animationDelay={styles.delay}
        css={{
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
        h="500%"
        opacity={0.55}
      >
        {[
          ...CODE_FRAME_COLLECTION,
          { ...CODE_FRAME_COLLECTION[0], id: "runtime-loop" },
        ].map((frame) => (
          <Box
            as="pre"
            boxSizing="border-box"
            fontFamily="'DOS', monospace"
            fontSize={styles.fontSize}
            h="20%"
            key={frame.id}
            lineHeight={1.2}
            m="0"
            overflow="hidden"
            p="0.75rem"
            whiteSpace="pre"
          >
            {frame.content}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
