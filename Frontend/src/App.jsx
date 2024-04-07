import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sandbox from "./components/Sandbox";
import About from "./components/About";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Sandbox />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Box>
  );
}

export default App;
