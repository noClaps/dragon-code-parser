// @ts-check

/** @type {Record<string, string>} */
const Crustacean = {
  C: "Crustacean",
  Cc: "Crab",
  Cl: "Lobster",
  Cs: "Shrimp",
};

/**
 * @param {string} code
 */
export default function parse(code) {
  return Crustacean[code] ?? `<span class="error">Unknown crustacean</span>`;
}
