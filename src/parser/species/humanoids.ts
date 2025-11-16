import { isUppercase } from "../utils";

export const Humanoid = {
  H: "Human",
  Ha: "Ape",
  Hd: "Dwarf",
  He: "Elf",
  Hew: "Wood elf",
  Hf: "Fairy",
  Hi: "Giant",
  Hg: "Gnome",
  Hh: "Hobbit",
  Hk: "Kender",
  Hy: "Nymph",
  Ht: "Troll",
  Hw: "Wolfman",
  "H?": "Unknown/Anthropomorphic humanoid",

  parse(code: string): string {
    let c = "H";
    for (let i = 1; i < code.length && !isUppercase(code[i]); i++) {
      c += code[i];
    }
    return Humanoid[c] ?? `<span class="error">Unknown humanoid</span>`;
  },
};
