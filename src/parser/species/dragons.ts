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
    return Dragon[code] ?? "ERROR: Unknown dragon";
  },
};
