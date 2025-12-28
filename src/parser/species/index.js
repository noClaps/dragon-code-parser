// @ts-check

import amphibian from "./amphibians.js";
import bird from "./birds.js";
import crustacean from "./crustaceans.js";
import dinosaur from "./dinosaurs.js";
import dragon from "./dragons.js";
import extraterrestrial from "./extraterrestrials.js";
import fish from "./fish.js";
import humanoid from "./humanoids.js";

/** @type {Record<string, (code: string) => string>} */
const Species = {
  D: dragon,
  H: humanoid,
  A: amphibian,
  B: bird,
  C: crustacean,
  S: dinosaur,
  E: extraterrestrial,
  F: fish,
  // Insect = "I",
  // Legendary = "L",
  // Mammal = "M",
  // Mollusc = "O",
  // Mythical = "Y",
  // Plant = "P",
  // Reptile = "R",
  // Spirit = "Q",
  // Undead = "U",
  // Shapechanger = "~",
  //
};

/**
 * @param {string} code
 */
export default function parse(code) {
  return Species[code[0]]
    ? Species[code[0]](code)
    : `<span class="error">Unknown species</span>`;
}
