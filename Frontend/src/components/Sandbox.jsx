import { Box } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../languages";

const Sandbox = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("wolve");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Box>
  );
};

export default Sandbox;
