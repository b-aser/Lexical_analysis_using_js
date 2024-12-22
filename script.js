function tokenizeJavaScriptWithTypes(code) {
  // Regular expression to match JavaScript tokens
  const tokenRegex = /\s+|\/\/.*|\/\*[\s\S]*?\*\/|".*?"|'.*?'|`.*?`|\w+|[^\s]/g;
  const tokens = [];
  let match;

  // Define token types
  const tokenTypes = {
    if: "Keyword",
    else: "Keyword",
    console: "Identifier",
    log: "Identifier",
    var: "Keyword",
    let: "Keyword",
    const: "Keyword",
    function: "Keyword",
    return: "Keyword",
    number: "Literal",
    string: "Literal",
    operator: "Operator",
    punctuation: "Punctuation",
  };

  while ((match = tokenRegex.exec(code)) !== null) {
    const token = match[0].trim();

    if (token) {
      let type = "Unknown";

      // Check for keywords
      if (
        [
          "if",
          "else",
          "console",
          "log",
          "var",
          "let",
          "const",
          "function",
          "return",
        ].includes(token)
      ) {
        type = "Keyword";
      }
      // Check for literals
      else if (/^\d+(\.\d+)?$/.test(token)) {
        type = "Literal";
      } else if (/^["'`].*["'`]$/.test(token)) {
        type = "Literal";
      }
      // Check for operators
      else if (/[\+\-\*\/\=\!\<\>\&\|\^]/.test(token)) {
        type = "Operator";
      }
      // Check for punctuation
      else if (/[\{\}\(\)\[\];,\.]/.test(token)) {
        type = "Punctuation";
      }
      // If it matches a variable name
      else if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
        type = "Identifier";
      }

      tokens.push({ token, type });
    }
  }

  return tokens;
}

// Example usage
const code = `
for (let i = 0; i < 10; i++) {
  console.log(i);
}
`;

console.log(tokenizeJavaScriptWithTypes(code));
