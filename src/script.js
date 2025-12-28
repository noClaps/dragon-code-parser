// @ts-check

import { Parser } from "./parser/index.js";

const input = document.querySelector("input");
if (!input) throw "Input element not found";

const output = document.querySelector("output");
if (!output) throw "Output element not found";

input.addEventListener("input", () => {
  if (!input.value) {
    output.innerHTML = "";
    return;
  }
  const parser = new Parser(input.value);
  output.innerHTML = parser.display();
});
