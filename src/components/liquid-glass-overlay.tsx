import { Box } from "@chakra-ui/react";
import { Fragment } from "react";

export function LiquidGlassOverlay() {
  return (
    <Fragment>
      <Box
        _dark={{ background: "rgb(26 28 36 / 0.42)" }}
        aria-hidden="true"
        background="rgb(255 255 255 / 0.32)"
        inset="0"
        pointerEvents="none"
        position="absolute"
        zIndex="1"
      />
    </Fragment>
  );
}
