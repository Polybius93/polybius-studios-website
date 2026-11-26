import { VStack } from "@chakra-ui/react";

import { SectionContainer } from "@/components/section-container";
import { SectionHeader } from "@/components/section-header";
import { JOB_COLLECTION } from "@/constants/job-collection";

import { Job } from "./components/job";

export const Experience = () => {
  return (
    <SectionContainer id="experience">
      <SectionHeader align="right" title="experience" />
      <VStack align="flex-start" gap="8" w="100%">
        {JOB_COLLECTION.map((job) => (
          <Job
            company={job.company}
            date={job.date}
            description={job.description}
            key={job.company + job.title + job.description}
            title={job.title}
          />
        ))}
      </VStack>
    </SectionContainer>
  );
};
