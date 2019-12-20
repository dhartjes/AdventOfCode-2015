import {
  isNaughty,
  wasNice,
  isNice,
  isVowel,
  hasAtLeastThreeVowels
} from "./alignmentChecker";

describe("AlignmentChecker checks whether a string is naughty or nice", () => {
  it("should be naughty if it contains bad string", () => {
    expect(isNaughty("ab")).toBeTruthy();
    expect(isNaughty("cd")).toBeTruthy();
    expect(isNaughty("pq")).toBeTruthy();
    expect(isNaughty("xy")).toBeTruthy();
    expect(isNaughty("ahsfeijblpqahs")).toBeTruthy();
    expect(isNaughty("bc")).toBeFalsy();
    expect(isNaughty("de")).toBeFalsy();
    expect(isNaughty("qr")).toBeFalsy();
    expect(isNaughty("yz")).toBeFalsy();
  });

  it("should have been nice if it has at least three vowels", () => {
    expect(wasNice("aaa")).toBeTruthy();
    expect(wasNice("eee")).toBeTruthy();
    expect(wasNice("iii")).toBeTruthy();
    expect(wasNice("ooo")).toBeTruthy();
    expect(wasNice("uuu")).toBeTruthy();

    expect(wasNice("aa")).toBeFalsy();
    expect(wasNice("ee")).toBeFalsy();
    expect(wasNice("ii")).toBeFalsy();
    expect(wasNice("oo")).toBeFalsy();
    expect(wasNice("uu")).toBeFalsy();

    expect(wasNice("caac")).toBeFalsy();
    expect(wasNice("dvszwmarrgswjxmb")).toBeFalsy();
  });

  it("was nice if it has at least two of a single character in a row", () => {
    expect(wasNice("acaca")).toBeFalsy();
    expect(wasNice("jchzalrnumimnmhp")).toBeFalsy();
    expect(wasNice("caaca")).toBeTruthy();
  });

  it("should know a vowel when it sees one", () => {
    expect(isVowel("a")).toBeTruthy();
    expect(isVowel("e")).toBeTruthy();
    expect(isVowel("i")).toBeTruthy();
    expect(isVowel("o")).toBeTruthy();
    expect(isVowel("u")).toBeTruthy();
  });

  it("should count vowels only", () => {
    expect(hasAtLeastThreeVowels("aa")).toBeFalsy();
    expect(hasAtLeastThreeVowels("aaa")).toBeTruthy();
    expect(hasAtLeastThreeVowels("ee")).toBeFalsy();
    expect(hasAtLeastThreeVowels("eee")).toBeTruthy();
    expect(hasAtLeastThreeVowels("ii")).toBeFalsy();
    expect(hasAtLeastThreeVowels("iii")).toBeTruthy();
    expect(hasAtLeastThreeVowels("oo")).toBeFalsy();
    expect(hasAtLeastThreeVowels("ooo")).toBeTruthy();
    expect(hasAtLeastThreeVowels("uu")).toBeFalsy();
    expect(hasAtLeastThreeVowels("uuu")).toBeTruthy();

    expect(hasAtLeastThreeVowels("aei")).toBeTruthy();
    expect(hasAtLeastThreeVowels("iou")).toBeTruthy();
    expect(hasAtLeastThreeVowels("business")).toBeTruthy();

    expect(hasAtLeastThreeVowels("catch")).toBeFalsy();
    expect(hasAtLeastThreeVowels("caca")).toBeFalsy();
    expect(hasAtLeastThreeVowels("caca")).toBeFalsy();
    expect(hasAtLeastThreeVowels("schmidt")).toBeFalsy();
  });

  it("should be nice according to current standards", () => {
    expect(isNice("aaa")).toBeFalsy();
    expect(isNice("baaba")).toBeTruthy();
    expect(isNice("haegwjzuvuyypxyuha")).toBeTruthy();
    expect(isNice("haegwjzvuyypxyuha")).toBeFalsy();
    expect(isNice("qjhvhtzxzqqjkmpb")).toBeTruthy();
    expect(isNice("xxyxx")).toBeTruthy();
    expect(isNice("uurcxstgmygtbstg")).toBeFalsy();
    expect(isNice("ieodomkazucvgmuy")).toBeFalsy();
  });

  it("should have been naughty if it has nice and naughty qualities", () => {
    expect(wasNice("baaba")).toBeFalsy();
    expect(wasNice("haegwjzuvuyypxyu")).toBeFalsy();
  });
});
