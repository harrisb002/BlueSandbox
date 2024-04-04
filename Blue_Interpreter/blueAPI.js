const express = require("express");
const cors = require("cors");
const colors = require("colors");
const fs = require("fs").promises;
const { exec } = require("child_process");
const app = express();
const port = 3001; // Port must remain available

app.use(cors());
app.use(express.json()); // This line is crucial for your error

app.post("/execute-blue-code", async (req, res) => {
  const { sourceCode } = req.body;
  const filePath = "./tempSourceCode.c"; // Temporary file for the source code to be executed

  try {
    // Write the source code to a temporary file
    await fs.writeFile(filePath, sourceCode);

    // Execute the precompiled './main' program with the temporary file
    exec(`./main ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        // Extract the part of the error message after the command
        const errorMessage =
          error.message.split("./main ./tempSourceCode.c")[1] ||
          " Unknown error";
        return res.status(500).send({ error: errorMessage.trim() });
      }

      // Send the output back to the frontend
      res.send({ output: stdout, stderr: stderr });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Server error: ${error.message}` });
  }
});

app.listen(port, console.log(`Server running on port ${port}`.cyan));
