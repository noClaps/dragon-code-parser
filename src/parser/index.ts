import { Species } from "./species";

export class Parser {
  species: string;

  constructor(code: string) {
    // parse species
    let c = code[0];
    for (let i = 1; i < code.length && !isUppercase(code[i]); i++) {
      c += code[i];
    }
    this.species = Species.parse(c);
    code = code.substring(c.length);
  }

  display(): string {
    return `
<table border="1">
<tr><th>Species</th><td>${this.species}</td></tr>
</table>
`;
  }
}

export function isUppercase(char: string): boolean {
  if (char.length != 1) {
    return false;
  }
  return /[A-Z]/.test(char);
}
