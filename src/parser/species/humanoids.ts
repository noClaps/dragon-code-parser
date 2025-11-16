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
    return Humanoid[code] ?? `<span class="error">Unknown humanoid</span>`;
  },
};
