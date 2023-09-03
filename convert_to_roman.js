// function that will convert a number into a roman numeral
// convertToRoman(2) should return "II".
// convertToRoman(3) should return "III".
// convertToRoman(4) should return "IV".
function convertToRoman(num) {
  let romanNumeral = "";
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      romanNumeral += key;
      num -= romanNumerals[key];
    }
  }
  return romanNumeral;
}

convertToRoman(36);
