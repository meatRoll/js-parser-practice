const { Parser } = require("acorn");

const MyParser = Parser.extend(require("./plugins/a"));

const res = MyParser.parse(
  "import a from './a.js'; const b = a(); console.log(b());",
  {
    ecmaVersion: 2020,
    sourceType: "module",
  }
);
// console.log(JSON.stringify(res, null, 2));
