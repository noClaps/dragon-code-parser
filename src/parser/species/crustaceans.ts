export const Crustacean = {
  C: "Crustacean",
  Cc: "Crab",
  Cl: "Lobster",
  Cs: "Shrimp",

  parse(code: string): string {
    return Crustacean[code] ?? `<span class="error">Unknown crustacean</span>`;
  },
};
