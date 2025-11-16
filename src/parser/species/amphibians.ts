import { isUppercase } from "../utils";

export const Amphibian = {
  A: "Amphibian",
  Af: "Frog",
  An: "Newt",
  As: "Salamander",
  At: "Toad",

  parse(code: string): string {
    let c = "A";
    for (let i = 1; i < code.length && !isUppercase(code[i]); i++) {
      c += code[i];
    }
    return Amphibian[c] ?? "ERROR: Unknown amphibian";
  },
};
