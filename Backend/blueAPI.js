import express, { json } from 'express';
import { promises as fs } from 'fs';
import { exec } from 'child_process';
const app = express();
const port = 3001; // Port must remain available 

app.use(json()); // Middleware to parse JSON bodies

app.post('/execute-blue-code', async (req, res) => {
  const { sourceCode } = req.body;
  const filePath = './tempSourceCode.blue'; // Temporary file for the source code to be executed

  try {
    // Write the source code to a temporary file
    await fs.writeFile(filePath, sourceCode);
    
    // Execute the precompiled './main' program with the temporary file
    exec(`./main ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).send({ error: `Execution error: ${error.message}` });
      }

      // Send the output back to the frontend
      res.send({ output: stdout, stderr: stderr });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Server error: ${error.message}` });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
