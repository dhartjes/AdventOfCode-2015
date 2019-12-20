export const isNaughty = input =>
  input.includes("ab") ||
  input.includes("cd") ||
  input.includes("pq") ||
  input.includes("xy");

const vowels = ["a", "e", "i", "o", "u"];

export const isVowel = char => vowels.includes(char);

export const hasAtLeastThreeVowels = input =>
  hasAtLeastXChars(input) && input.split("").filter(isVowel).length >= 3;

export const hasAtLeastXChars = (input, length = 3) => input.length >= length;

export const hasRepeatingChars = input =>
  input.split("").filter((c, i, array) => array[i + 1] === c).length > 0;

export const wasNice = input =>
  hasAtLeastThreeVowels(input) && hasRepeatingChars(input) && !isNaughty(input);

export const hasARepeatingPair = input => {
  for (let i = 2; i < input.length - 1; i++) {
    let pair = input.slice(i - 2, i);

    if (input.indexOf(pair, i) !== -1) {
      return true;
    }
  }

  return false;
};

export const hasPairWithOneInBetween = input => {
  for (let i = 0; i < input.length - 2; i++) {
    if (input.charAt(i) == input.charAt(i + 2)) {
      return true;
    }
  }
};

export const isNice = input =>
  hasAtLeastXChars(input, 4) &&
  hasARepeatingPair(input) &&
  hasPairWithOneInBetween(input);
