export function isUppercase(char: string): boolean {
  if (char.length != 1) {
    return false;
  }
  return /[A-Z]/.test(char);
}
