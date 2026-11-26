import { Text, VStack } from "@chakra-ui/react";

interface JobProps {
  company: string;
  date: string;
  description: string;
  title: string;
}

export const Job = ({ company, date, description, title }: JobProps) => {
  return (
    <VStack align="stretch" gap="4" w="100%">
      <VStack align="stretch" gap="1" w="100%">
        <Text fontSize="md" fontWeight="bold">
          {company}
        </Text>
        <Text fontSize="md">{title}</Text>
        <Text fontSize="md" fontStyle="italic">
          {date}
        </Text>
      </VStack>
      <Text fontSize="sm">{description}</Text>
    </VStack>
  );
};
