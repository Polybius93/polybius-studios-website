import { Grid, Text } from "@chakra-ui/react";

import { SectionContainer } from "@/components/section-container";
import { SectionHeader } from "@/components/section-header";
import { TECHNOLOGY_COLLECTION } from "@/constants/technology-collection";

export const TechnicalExpertise = () => {
  return (
    <SectionContainer id="technical-expertise">
      <Grid
        fontFamily="DOS"
        fontSize="md"
        gap="4"
        justifySelf="flex-end"
        templateColumns="repeat(4, 1fr)"
      >
        {TECHNOLOGY_COLLECTION.map((tech) => (
          <Text key={tech} textAlign="right">
            {tech}
          </Text>
        ))}
      </Grid>
      <SectionHeader align="left" title="technical expertise" />
    </SectionContainer>
  );
};
