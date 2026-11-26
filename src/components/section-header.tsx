import { Heading } from "@chakra-ui/react";

interface SectionHeaderProps {
  align?: "center" | "left" | "right";
  title: string;
}

export const SectionHeader = ({
  align = "left",
  title,
}: SectionHeaderProps) => {
  return (
    <Heading fontSize="6xl" lineHeight="1" minW="0" textAlign={align} w="100%">
      {title}
    </Heading>
  );
};
