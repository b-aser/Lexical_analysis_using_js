# JavaScript Tokenizer with Type Detection

This project is a simple JavaScript tokenizer that breaks down JavaScript code into tokens and categorizes each token by type. It is useful for analyzing or parsing JavaScript code into its core components, such as keywords, identifiers, operators, literals, and punctuation.

## Features

- Tokenizes JavaScript code into meaningful components.
- Classifies each token by its type (e.g., Keyword, Identifier, Literal, Operator, Punctuation).
- Supports both single-line and multi-line JavaScript code.

## Requirements

This script is written in JavaScript and can be run locally in **Visual Studio Code (VS Code)**.

### Prerequisites:
- **Node.js**: Make sure [Node.js](https://nodejs.org/) is installed on your system.
- **Visual Studio Code (VS Code)**: Ensure you have [VS Code](https://code.visualstudio.com/) installed.
- **Git**: If you want to clone the repository, ensure you have **Git** installed. You can download it from [Git's official website](https://git-scm.com/).

## How to Run the Code Locally Using Visual Studio Code

### Step 1: Clone or Download the Repository

1. **Clone the Repository (Using Git)**:
   - Open your terminal (or **VS Code Integrated Terminal**).
   - Use the following command to clone the repository to your local machine:
   
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```
   - Replace `your-username` and `your-repository-name` with the actual username and repository name.

2. **Download the Repository (Without Git)**:
   - Visit the repository page on GitHub.
   - Click the green **Code** button and then select **Download ZIP**.
   - Extract the ZIP file to a folder on your computer.

### Step 2: Open the Project in Visual Studio Code

1. Open **Visual Studio Code**.
2. Click on **File > Open Folder** and navigate to the folder where you cloned or extracted the repository.
3. Open the folder containing the repository.

### Step 3: Install Node.js (If Not Installed)

Ensure that **Node.js** is installed on your system. You can check if it's installed by running the following command in your terminal:

```bash
node -v
```

If Node.js is not installed, download and install it from the [official Node.js website](https://nodejs.org/).

### Step 4: Install Dependencies (Optional)

If the repository has any dependencies (e.g., external libraries), you can install them by following these steps:

1. Open a terminal in **VS Code** (via **Terminal > New Terminal**).
2. Navigate to the project folder if not already there.
3. Run the following command to install any dependencies listed in the `package.json` file:

   ```bash
   npm install
   ```

   This will install any required dependencies.

### Step 5: Modify the Code (Optional)

The main code for tokenizing JavaScript can be found in the `tokenizer.js` file (or a similarly named file). 

If you want to test the tokenizer with different JavaScript code, you can modify the `code` variable inside this file. For example:

```javascript
const code = `
for (let i = 0; i < 10; i++) {
  console.log(i);
}
`;
```
to
```javascript
const code = `
if (x > 10) {
    console.log("x is greater than 10");
} else if (x === 10) {
    console.log("x is exactly 10");
} else {
    console.log("x is less than 10");
}
`;
```

### Step 6: Run the Code

1. In **Visual Studio Code**, open the terminal by selecting **Terminal > New Terminal**.
2. Ensure you're in the correct directory where the cloned/extracted repository is located.
3. Run the script using **Node.js** with the following command:

   ```bash
   node tokenizer.js
   ```

   This will execute the code in the `tokenizer.js` file, and you will see the tokenized output with the token types printed in the terminal.

### Example Output:

```json
[
  { "token": "if", "type": "Keyword" },
  { "token": "(", "type": "Punctuation" },
  { "token": "x", "type": "Identifier" },
  { "token": ">", "type": "Operator" },
  { "token": "10", "type": "Literal" },
  { "token": ")", "type": "Punctuation" },
  { "token": "{", "type": "Punctuation" },
  { "token": "console", "type": "Identifier" },
  { "token": ".", "type": "Punctuation" },
  { "token": "log", "type": "Identifier" },
  { "token": "(", "type": "Punctuation" },
  { "token": "\"x is greater than 10\"", "type": "Literal" },
  { "token": ")", "type": "Punctuation" },
  { "token": ";", "type": "Punctuation" },
  { "token": "}", "type": "Punctuation" },
  { "token": "else", "type": "Keyword" },
  { "token": "if", "type": "Keyword" },
  ...
]
```

### Step 7: Troubleshooting

- **If you get an error like `command not found`**: Ensure **Node.js** is installed correctly by typing `node -v` in the terminal to check the version.
- **If the terminal says `node` is not recognized**: You may need to restart your terminal or re-install Node.js to set up the environment variables properly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
