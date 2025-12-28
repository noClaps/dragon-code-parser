// @ts-check

/** @type {Record<string, string>} */
const Bird = {
  B: "Bird",
  Bc: "Crow",
  Be: "Eagles",
  Bh: "Hawk",
  Bp: "Phoenix",
  Br: "Raven",
};

/**
 * @param {string} code
 */
export default function parse(code) {
  return Bird[code] ?? `<span class="error">Unknown bird</span>`;
}
