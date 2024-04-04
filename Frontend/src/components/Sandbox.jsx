import { Box } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

const Sandbox = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Box>
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={onMount}
      />
    </Box>
  );
};

export default Sandbox;
