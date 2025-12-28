// @ts-check

/** @type {Record<string, string>} */
const Dragon = {
  D: "Dragon",
  Da: "Amphitere",
  Dc: "Draconid",
  Dd: "Dragonette",
  De: "Eastern Dragon",
  Df: "Faerie Dragon",
  Dh: "Hydra",
  Di: "Dimar",
  Dl: "Dracolich",
  Dp: "Pernese Dragon",
  Dr: "Turtle Dragon",
  Ds: "Serpent",
  Dss: "Sea serpent",
  Dsf: "Fire serpent",
  Dt: "Tarrasque",
  Du: "Pseudodragon",
  Dv: "Wyvern",
  Dw: "Western Dragon",
};

/**
 * @param {string} code
 */
export default function parse(code) {
  return Dragon[code] ?? `<span class="error">Unknown dragon</span>`;
}
