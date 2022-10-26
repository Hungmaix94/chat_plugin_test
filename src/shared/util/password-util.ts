export const validatePassword = (password, minLength, maxLength) => {
  const regex = /[!@#$%^&*\(\),\.\?":{}|<>`~\-=+_\\\/\[\]]/g; // eslint-disable-line
  return {
    lowerLetters: /[a-z]+/.test(password),
    upperLetters: /[A-Z]+/.test(password),
    numbers: /[0-9]+/.test(password),
    symbols: regex.test(password),
    passwordLength: password.length >= minLength && password.length <= maxLength,
    diacritic: /[\w\d!-}\`\~]$/.test(password), // eslint-disable-line
  };
};
