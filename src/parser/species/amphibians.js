// @ts-check

/** @type {Record<string, string>} */
const Amphibian = {
  A: "Amphibian",
  Af: "Frog",
  An: "Newt",
  As: "Salamander",
  At: "Toad",
};

/**
 * @param {string} code
 */
export default function parse(code) {
  return Amphibian[code] ?? `<span class="error">Unknown amphibian</span>`;
}
