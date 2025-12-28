// @ts-check

/** @type {Record<string, string>} */
const Humanoid = {
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
};

/**
 * @param {string} code
 */
export default function parse(code) {
  return Humanoid[code] ?? `<span class="error">Unknown humanoid</span>`;
}
