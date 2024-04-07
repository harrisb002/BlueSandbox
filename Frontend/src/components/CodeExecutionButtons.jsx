import React from "react";
import { Button } from "@chakra-ui/react";

const CodeExecutionButtons = ({
  isLoading,
  onRunCode,
  onExecuteType,
  language,
}) => {
  return (
    <>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={onRunCode}
      >
        Run Code
      </Button>
      {language === "cpp" && (
        <>
          <Button
            variant="outline"
            colorScheme="green"
            mb={4}
            ml={2}
            isLoading={isLoading}
            onClick={() => onExecuteType("tokens")}
          >
            Tokens
          </Button>
          <Button
            variant="outline"
            colorScheme="green"
            mb={4}
            ml={2}
            isLoading={isLoading}
            onClick={() => onExecuteType("cst")}
          >
            CST
          </Button>
          <Button
            variant="outline"
            colorScheme="green"
            mb={4}
            ml={2}
            isLoading={isLoading}
            onClick={() => onExecuteType("symbolTable")}
          >
            SymbolTable
          </Button>
        </>
      )}
    </>
  );
};

export default CodeExecutionButtons;
