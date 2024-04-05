const express = require("express");
const cors = require("cors");
const colors = require("colors");
const fs = require("fs").promises;
const { exec } = require("child_process");
const app = express();
const port = 3001; // Port must remain available

app.use(cors());
app.use(express.json()); // This line is crucial for your error

app.post("/execute-blue-code/:type", async (req, res) => {
  const { sourceCode } = req.body;
  const { type } = req.params; // Type of execution: run, tokens, cst, symbolTable
  const filePath = "./tempSourceCode.c";

  try {
    await fs.writeFile(filePath, sourceCode);
    // Decide which executable to run based on the 'type' parameter
    let command;
    switch (type) {
      case "tokens":
        command = `./mainTokens ${filePath}`;
        break;
      case "cst":
        command = `./mainCST ${filePath}`;
        break;
      case "symbolTable":
        command = `./mainSymbolTable ${filePath}`;
        break;
      default:
        command = `./main ${filePath}`;
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).send({ error: error.message });
      }
      res.send({ output: stdout, stderr: stderr });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Server error: ${error.message}` });
  }
});

app.listen(port, console.log(`Server running on port ${port}`.cyan));
