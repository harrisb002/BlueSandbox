import { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  // useToast is a Chakra UI hook for showing toast notifications
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function executeBlueCode(sourceCode) {
    try {
      const response = await fetch("http://localhost:3001/execute-blue-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sourceCode }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Failed to execute Blue code:", error);
      throw error;
    }
  }

  const runCode = async () => {
    // Get the source code from the editor using its reference
    const sourceCode = editorRef.current.getValue();
    // If there's no source code, do nothing
    if (!sourceCode) return;
    try {
      // Set loading state to true before making the API call
      setIsLoading(true);

      let result;
      if (language === "cpp") {
        // AKA blue
        // Execute the code via the blue API
        result = await executeBlueCode(sourceCode);
      } else {
        // Execute the code via the piston API and destructure to get the 'run' object
        const response = await executeCode(language, sourceCode);
        result = response.run;
      }

      // Split the output string into an array of lines and update state
      setOutput(result.output.split("\n"));
      // Check if there's an error message in stderr, set error state and output accordingly
      if (result.stderr) {
        setIsError(true);
        setOutput(result.stderr.split("\n"));
      } else {
        setIsError(false);
        // Split the output string into an array of lines and update state
        setOutput(result.output.split("\n"));
      }
    } catch (error) {
      // Log any errors to the console and show a toast notification
      console.log(error);
      setIsError(true); // Ensure text color is set to red
      setOutput([error.message || "Unable to run code"]); // Convert error message into an array to be consistent with successful output

      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      // After execution, reset the loading state
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading} // Shows loading indicator if code is being executed
        onClick={runCode} // Function to run code on click
      >
        Run Code
      </Button>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        ml={2}
        isLoading={isLoading} // Shows loading indicator if code is being executed
        // onClick={symbolTable} // Function to run code on click
      >
        Tokens
      </Button>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        ml={2}
        isLoading={isLoading} // Shows loading indicator if code is being executed
        // onClick={tokenizer} // Function to run code on click
      >
        CST
      </Button>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        ml={2}
        isLoading={isLoading} // Shows loading indicator if code is being executed
        // onClick={CST} // Function to run code on click
      >
        SymbolTable
      </Button>
      <Box
        height="90vh" // Sets a fixed height for the output box
        p={2} // Padding inside the box
        color={isError ? "red.400" : ""} // Text color changes based on error state
        border="1px solid" // Border styling
        borderRadius={4} // Rounded corners for the box
        borderColor={isError ? "red.500" : "#333"} // Border color changes based on error state
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>) // Map each line of output to a Text component
          : 'Click "Run Code" to see the output here'}{" "}
        {/*Default text before any code is run*/}
      </Box>
    </Box>
  );
};

export default Output; // Make the Output component available for import
