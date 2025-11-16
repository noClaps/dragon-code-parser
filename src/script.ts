import { Parser } from "./parser";

const input = document.querySelector("input")!;
const output = document.querySelector("output")!;

input.addEventListener("input", () => {
  if (!input.value) {
    output.innerHTML = "";
    return;
  }
  const parser = new Parser(input.value);
  output.innerHTML = parser.display();
});
