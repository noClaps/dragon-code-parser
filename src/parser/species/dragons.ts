import { isUppercase } from "../utils";

export const Dragon = {
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

  parse(code: string): string {
    let c = "D";
    for (let i = 1; i < code.length && !isUppercase(code[i]); i++) {
      c += code[i];
    }
    return Dragon[c] ?? "ERROR: Unknown dragon";
  },
};
