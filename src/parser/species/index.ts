import { Dragon } from "./dragons";
import { Humanoid } from "./humanoids";

export const Species = {
  D: Dragon.parse,
  H: Humanoid.parse,
  // Amphibian = "A",
  // Bird = "B",
  // Crustacean = "C",
  // Dinosaur = "S",
  // Extraterrestrial = "E",
  // Fish = "F",
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
};

export function parseSpecies(code: string): string {
  return Species[code[0]]
    ? Species[code[0]](code)
    : `<span class="error">Unknown species</span>`;
}
