// @ts-check

/** @type {Record<string, string>} */
const Dinosaur = {
  S: "Dinosaur",
  Sa: "Allosaur",
  Sc: "Triceratops",
  Sp: "Apatosaur",
  Ss: "Stegosaur",
  St: "Tyrannosaur",
  Sv: "Velociraptor",
};

/**
 * @param {string} code
 */
export default function parse(code) {
  return Dinosaur[code] ?? `<span class="error">Unknown dinosaur</span>`;
}
