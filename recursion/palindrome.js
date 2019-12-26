function firstCharacter(str) {
  return str.slice(0, 1);
}

function lastCharacter(str) {
  return str.slice(-1);
}

function middleCharacters(str) {
  return str.slice(1, -1);
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (firstCharacter(str) !== lastCharacter(str)) {
    return false;
  }

  return isPalindrome(middleCharacters(str));
}


console.log(isPalindrome("a"));
console.log(isPalindrome(""));
console.log(isPalindrome("ab"));
console.log(isPalindrome("abba"));