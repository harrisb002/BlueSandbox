import { Box } from "@chakra-ui/react";
import React from "react";
import Editor from "@monaco-editor/react";

const Sandbox = () => {
  return (
    <Box>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </Box>
  );
};

export default Sandbox;
