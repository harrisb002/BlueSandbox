export const LANGUAGE_VERSIONS = {
  wolve: "1.0.0",
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  wolve: `\nfunction int sum_of_first_n_squares (int n)\n{\n\tint sum;\n\n\tsum = 0;\n\tif (n >= 1)\n\t{\n\t\tsum = n * (n + 1) * (2 * n + 1) / 6;\n\t}\n\treturn sum;\n}\n\nprocedure main (void)\n{\n\tint n;\n\tint sum;\n\tn = 100;\n\n\tsum = sum_of_first_n_squares (n);\n\tprintf ("sum of the squares of the first %d numbers = %d", n, sum);\n}`,
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Alex';\necho $name;\n",
};
