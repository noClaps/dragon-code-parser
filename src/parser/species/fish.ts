export const Fish = {
  F: "Fish",
  Fh: "Sea horse",
  Ff: "Freshwater fish",
  Ffg: "Goldfish",
  Fft: "Trout",
  Fs: "Shark",

  parse(code: string): string {
    return Fish[code] ?? `<span class="error">Unknown fish</span>`;
  },
};
