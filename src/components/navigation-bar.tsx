import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Menu,
  Portal,
  Switch,
} from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "next-themes";
import { FiMenu } from "react-icons/fi";

const navigationItems = [
  { id: "about", label: "/about" },
  { id: "experience", label: "/experience" },
  { id: "technical-expertise", label: "/tech_stack" },
  { id: "contact", label: "/contact" },
] as const;

export const NavigationBar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  const handleThemeToggle = () => {
    if (isDarkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <HStack flexWrap="nowrap" justify="space-between" p="4" w="100%">
      <Heading as="h1" color="fg" fontSize="lg">
        polybius_studios.
      </Heading>
      <HStack flexWrap="nowrap" gap="12px" justify="flex-end" minW="0">
        <Box display={{ base: "block", lg: "none" }}>
          <Menu.Root positioning={{ placement: "bottom-end" }}>
            <Menu.Trigger asChild>
              <Button
                aria-label="Open navigation menu"
                size="sm"
                variant="ghost"
              >
                <FiMenu aria-hidden="true" size={20} />
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  {navigationItems.map(({ id, label }) => (
                    <Menu.Item asChild key={id} value={id}>
                      <Link
                        hash={id}
                        hashScrollIntoView={{ behavior: "smooth" }}
                        to="/"
                      >
                        {label}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Box>
        <ButtonGroup
          display={{ base: "none", lg: "flex" }}
          flexWrap="nowrap"
          gap="12px"
        >
          {navigationItems.map(({ id, label }) => (
            <Button asChild key={id} size="sm" variant="ghost">
              <Link
                hash={id}
                hashScrollIntoView={{ behavior: "smooth" }}
                to="/"
              >
                {label}
              </Link>
            </Button>
          ))}
        </ButtonGroup>
        <Switch.Root
          aria-label="Toggle dark mode"
          checked={isDarkMode}
          onCheckedChange={handleThemeToggle}
          size="sm"
        >
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>
      </HStack>
    </HStack>
  );
};
