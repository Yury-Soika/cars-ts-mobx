import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { initializeCarStore } from "./store/CarStore";
import AppRouter from "./router/AppRouter";

const App: React.FC = observer(() => {
  initializeCarStore();

  return (
    <ChakraProvider>
      <Container maxW="xl" centerContent>
        <AppRouter />
      </Container>
    </ChakraProvider>
  );
});

export default App;
