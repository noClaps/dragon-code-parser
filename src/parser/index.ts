import { parseSpecies } from "./species";

export class Parser {
  species: string;

  constructor(code: string) {
    this.species = parseSpecies(code);
  }

  display(): string {
    return `
<table border="1">
<tr><th>Species</th><td>${this.species}</td></tr>
</table>
`;
  }
}
