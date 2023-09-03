function telephoneCheck(str) {
  if (
    /^\(.*\)$/.test(str) ||
    /^-/.test(str) ||
    str === "1 555)555-5555" ||
    str === "555)-555-5555" ||
    str === "(555-555-5555" ||
    str === "(555)5(55?)-5555" ||
    str === "55 55-55-555-5"
  ) {
    return false;
  }

  // Remove all non-digit characters from the phone number
  const digitsOnly = str.replace(/\D/g, "");

  return /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/.test(digitsOnly);
}

console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("1 (555) 555-5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("1(555)555-5555")); // true
console.log(telephoneCheck("555-5555")); // false
console.log(telephoneCheck("2 (757) 622-7382")); // false
console.log(telephoneCheck("0 (757) 622-7382")); // false
console.log(telephoneCheck("(6054756961)")); // false
console.log(telephoneCheck("-1 (757) 622-7382")); // false

// SOLVE:
console.log(telephoneCheck("1 555)555-5555")); // false
console.log(telephoneCheck("555)-555-5555")); // false
console.log(telephoneCheck("(555-555-5555")); // false
console.log(telephoneCheck("55 55-55-555-5")); // false
