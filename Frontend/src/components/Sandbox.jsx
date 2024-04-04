// Import necessary components from Chakra UI for layout
import { Box, HStack } from "@chakra-ui/react";
// Import hooks from React
import React, { useRef, useState } from "react";
// Import the Monaco Editor React wrapper
import Editor from "@monaco-editor/react";
// Import a custom component for selecting programming languages
import LanguageSelector from "./LanguageSelector";
// Import predefined code snippets for different languages
import { CODE_SNIPPETS } from "../languages";
// Import a custom component to display the output of executed code
import Output from "./Output";

const Sandbox = () => {
  // useRef to keep a mutable reference to the Editor instance
  const editorRef = useRef();
  // useState to hold the current editor content
  const [value, setValue] = useState("");
  // useState to hold the currently selected programming language
  const [language, setLanguage] = useState("cpp");

  // Function to run when the Editor is mounted, focusing the editor and setting up the ref
  const onMount = (editor) => {
    editorRef.current = editor; // Store editor instance in ref
    editor.focus(); // Focus the editor for immediate typing
  };

  // Function to update the language and the editor content based on the selected language
  const onSelect = (language) => {
    setLanguage(language); // Update the current language
    setValue(CODE_SNIPPETS[language]); // Update the editor content with the snippet for the selected language
  };

  return (
    <Box>
      <HStack spacing={4}>
        {" "}
        {/* Horizontally stack the language selector, editor, and output */}
        <Box w="50%">
          {" "}
          {/* Container for the editor and language selector */}
          <LanguageSelector language={language} onSelect={onSelect} />{" "}
          {/* Language selection dropdown */}
          <Editor
            options={{ minimap: { enabled: false } }} // Disable the minimap for simplicity
            height="75vh" // Set a fixed height for the editor
            theme="vs-dark" // Use the dark theme for the editor
            language={language} // Set the programming language for syntax highlighting
            defaultValue={CODE_SNIPPETS[language]} // Initialize with a default snippet
            onMount={onMount} // Focus the editor when it mounts
            value={value} // Controlled content of the editor
            onChange={(value) => setValue(value)} // Update the state on content change
          />
        </Box>
        <Output editorRef={editorRef} language={language} />{" "}
        {/* Display the output panel */}
      </HStack>
    </Box>
  );
};

export default Sandbox; // Export the Sandbox component for use elsewhere in the application
