import { useState } from "react";
import Sandbox from "./components/Sandbox";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Sandbox />
    </Box>
  );
}

export default App;
