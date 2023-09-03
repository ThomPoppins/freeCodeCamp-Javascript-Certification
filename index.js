function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let alphanumeric = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // Reverse alphanumeric string
  let reversed = alphanumeric.split("").reverse().join("");
  // Compare alphanumeric string to reversed string
  return alphanumeric === reversed;
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("2A3*3a2")); // true
console.log(palindrome("2A3 3a2")); // true
console.log(palindrome("2_A3*3#A2")); // true
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /- :) 0-0")); // true
console.log(palindrome("five|_/|four")); // false
