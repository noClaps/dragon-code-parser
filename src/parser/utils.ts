export function isUppercase(char: string): boolean {
  if (char.length != 1) {
    return false;
  }
  return char.toUpperCase() === char;
}
