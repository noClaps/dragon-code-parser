export const Extraterrestrial = {
  E: "Extraterrestrial",
  Ed: "Dalek",
  Et: "Tribble",

  parse(code: string): string {
    return (
      Extraterrestrial[code] ??
      `<span class="error">Unknown extraterrestrial</span>`
    );
  },
};
