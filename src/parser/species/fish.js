// @ts-check

/** @type {Record<string, string>} */
const Fish = {
  F: "Fish",
  Fh: "Sea horse",
  Ff: "Freshwater fish",
  Ffg: "Goldfish",
  Fft: "Trout",
  Fs: "Shark",
};

/**
 * @param {string} code
 */
export default function parse(code) {
  return Fish[code] ?? `<span class="error">Unknown fish</span>`;
}
