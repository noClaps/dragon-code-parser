export const Bird = {
  B: "Bird",
  Bc: "Crow",
  Be: "Eagles",
  Bh: "Hawk",
  Bp: "Phoenix",
  Br: "Raven",

  parse(code: string): string {
    return Bird[code] ?? `<span class="error">Unknown bird</span>`;
  },
};
