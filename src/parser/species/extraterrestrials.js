// @ts-check

/** @type {Record<string, string>} */
const Extraterrestrial = {
  E: "Extraterrestrial",
  Ed: "Dalek",
  Et: "Tribble",
};

/**
 * @param {string} code
 */
export default function parse(code) {
  return (
    Extraterrestrial[code] ??
    `<span class="error">Unknown extraterrestrial</span>`
  );
}
