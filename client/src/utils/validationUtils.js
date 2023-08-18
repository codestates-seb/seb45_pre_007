export function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
  return pattern.test(email);
}

export function hasLetterAndNumber(str) {
  const hasLetter = /[a-zA-Z]/.test(str);
  const hasNumber = /\d/.test(str);
  return hasLetter && hasNumber;
}
