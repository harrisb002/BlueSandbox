# Browser code editor for a C-like Language Interpreter Project

## Overview

The goal of this project is to create an in-browser code editor. This editor will allow one to write and execute code in the browser utilizing an interpreter for a C-like language built by my colleagues and I.

### Tools
- React + Vite
- Monaco React Editor: [https://www.npmjs.com/package/@monaco...](https://www.npmjs.com/package/@monaco-editor/react)
- Chakra UI: [https://chakra-ui.com](https://chakra-ui.com/)

### Interpreter
[https://github.com/SSUDevs/Interpreter](https://github.com/SSUDevs/Interpreter)

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to **each** project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`

## Usage

1. Start the frontend server using vite: `cd Frontend` & `npm run dev`
2. Start the backend server using node: `cd Blue_Interpreter` & `node blueAPI.js`
3. Make sure executable for interpreter is up-to-date: `cd Blue_Interpreter` & `make`
4. **Have Fun & let me know of any errors please!**