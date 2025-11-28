import { Amphibian } from "./amphibians";
import { Bird } from "./birds";
import { Crustacean } from "./crustaceans";
import { Dragon } from "./dragons";
import { Humanoid } from "./humanoids";

export const Species = {
  D: Dragon.parse,
  H: Humanoid.parse,
  A: Amphibian.parse,
  B: Bird.parse,
  C: Crustacean.parse,
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

  parse(code: string): string {
    return Species[code[0]]
      ? Species[code[0]](code)
      : `<span class="error">Unknown species</span>`;
  },
};
