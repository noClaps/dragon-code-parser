// @ts-check

import species from "./species/index.js";

export class Parser {
  /** @type {string} */
  species;

  /**
   * @param {string} code
   */
  constructor(code) {
    // parse species
    let c = code[0];
    for (let i = 1; i < code.length && !isUppercase(code[i]); i++) {
      c += code[i];
    }
    this.species = species(c);
    code = code.substring(c.length);
  }

  display() {
    return `
<table border="1">
<tr><th>Species</th><td>${this.species}</td></tr>
</table>
`;
  }
}

/**
 * @param {string} char
 */
export function isUppercase(char) {
  if (char.length != 1) {
    return false;
  }
  return /[A-Z]/.test(char);
}
