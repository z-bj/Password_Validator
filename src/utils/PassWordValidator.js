export default class PasswordValidator {
  constructor(password) {
    this.password = password;
  }

  hasLowerCaseLetter() {
    return /[a-z]/.test(this.password);
  }

  hasUpperCaseLetter() {
    return /[A-Z]/.test(this.password);
  }

  hasSpecialCharacter() {
    return /[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(this.password);
  }

  hasDigit() {
    return /\d/.test(this.password);
  }

  hasValidLength() {
    return this.password.length >= 8;
  }
}
