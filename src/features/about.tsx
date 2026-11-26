import { Text, VStack } from "@chakra-ui/react";

import { SectionContainer } from "@/components/section-container";
import { SectionHeader } from "@/components/section-header";
import { ABOUT_DESCRIPTION } from "@/constants/about-content";

export const About = () => {
  return (
    <SectionContainer id="about">
      <VStack align="flex-end" gap="8" w="100%">
        <Text fontSize="sm" textAlign="right" w={{ base: "100%", md: "75%" }}>
          {ABOUT_DESCRIPTION}
        </Text>
      </VStack>
      <SectionHeader title="about" />
    </SectionContainer>
  );
};
