// function rot13() decodes a string using the ROT13 cipher
function rot13(str) {
  // split string into array of characters
  // map each character to its charCode
  // if charCode is between 65 and 90, add 13 to it
  // if charCode is greater than 90, subtract 26 from it
  // map each charCode back to its character
  // join array of characters back into a string
  // return decoded string
  let decoded = "";
  for (let i = 0; i < str.length; i++) {
    // charCodeAt() returns an integer between 0 and 65535 representing
    // the UTF-16 code unit at the given index
    // A = 65, Z = 90
    let charCode = str.charCodeAt(i);
    // if charCode is between 65 and 90, add 13 to it
    // if charCode is greater than 90, subtract 26 from it
    if (charCode >= 65 && charCode <= 90) {
      // fromCharCode() returns a string created from the specified sequence of UTF-16 code units
      decoded += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else {
      // if charCode is not between 65 and 90, add it to decoded string
      decoded += str[i];
    }
  }
  return decoded;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
