
import { Button, ButtonGroup, HStack, Text, VStack } from "@chakra-ui/react";
import "./App.css";

function App() {

  return (
    <VStack>
      <HStack w="100%" justify="space-between" p="12px"><Text>polybius_studios</Text>
      <ButtonGroup gap="12px">
      <Button variant="ghost">/about</Button>
      <Button variant="ghost">/experience</Button>
      <Button variant="ghost">/tech_stack</Button>
      <Button variant="ghost">/contact</Button>
      </ButtonGroup>
      </HStack>
    </VStack>
   
  );
}

export default App;
