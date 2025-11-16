export const Amphibian = {
  A: "Amphibian",
  Af: "Frog",
  An: "Newt",
  As: "Salamander",
  At: "Toad",

  parse(code: string): string {
    return Amphibian[code] ?? `<span class="error">Unknown amphibian</span>`;
  },
};
