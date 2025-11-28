export const Dinosaur = {
  S: "Dinosaur",
  Sa: "Allosaur",
  Sc: "Triceratops",
  Sp: "Apatosaur",
  Ss: "Stegosaur",
  St: "Tyrannosaur",
  Sv: "Velociraptor",

  parse(code: string): string {
    return Dinosaur[code] ?? `<span class="error">Unknown dinosaur</span>`;
  },
};
