import sut from "./characterCounter";

const Backslashes = String.raw `"\\"`;
const Escaped_Double_Quote = String.raw `"\""`;
const Hex_Code = String.raw `"\x34"`;
const Double_Quotes = String.raw `""`;
const Two_Chars_With_Line_Break = String.raw `"a"
"b"`;
const Some_Of_Each = String.raw `"byc\x9dyxuafof\\\xa6uf\\axf\"ozomj\\olh\x6a"
"b"`;

describe("Character counter determines amount of in-memory characters given a string literal", () => {
  it("should count Just_Backslashes as 1 decoded", () => {
    let result = sut(Backslashes);
    expect(result.decodedSize).toBe(1);
  });

  it('should count Just_Backslashes as 4 original', () => {
    let result = sut(Backslashes);
    expect(result.originalSize).toBe(4);
  });

  it('should count Just_Backslashes as 10 encoded', () => {
    let result = sut(Backslashes);
    expect(result.encodedSize).toBe(10);
    expect(result.encoded).toBe(String.raw `"\"\\\\\""`);
  });

  it('should count Just_Escaped_Double_Quote as 1 decoded', () => {
    let result = sut(Escaped_Double_Quote);
    expect(result.decodedSize).toBe(1);
  });

  it('should count Just_Escaped_Double_Quote as 4 original', () => {
    let result = sut(Escaped_Double_Quote);
    expect(result.originalSize).toBe(4);
  });

  it('should count Just_Escaped_Double_Quote as 10 encoded', () => {
    let result = sut(Escaped_Double_Quote);
    expect(result.encodedSize).toBe(10);
    expect(result.encoded).toBe(String.raw `"\"\\\"\""`);
  });

  it(String.raw `should count Just_Hex_Code as 1 decoded`, () => {
    let result = sut(Hex_Code);
    expect(result.decodedSize).toBe(1);
  });

  it('should count Just_Hex_Code as 6 original', () => {
    let result = sut(Hex_Code);
    expect(result.originalSize).toBe(6);
  });

  it('should count Just_Hex_Code as 11 encoded', () => {
    let result = sut(Hex_Code);
    expect(result.encodedSize).toBe(11);
    expect(result.encoded).toBe(String.raw `"\"\\x34\""`);
  });

  it('should not count outermost Double Quotes when decoding', () => {
    let result = sut(Double_Quotes);
    expect(result.decodedSize).toBe(0);
  });

  it('should count Just_Double_Quotes as 2 original', () => {
    let result = sut(Double_Quotes);
    expect(result.originalSize).toBe(2);
  });

  it('should count Just_Double_Quotes as 4 encoded', () => {
    let result = sut(Double_Quotes);
    expect(result.encodedSize).toBe(6);
    expect(result.encoded).toBe(String.raw `"\"\""`);
  });

  it("should not count whitespace characters when decoding", () => {
    let result = sut('" "');
    expect(result.decodedSize).toBe(0);
  });

  it("should not count whitespace characters in original", () => {
    let result = sut('" "');
    expect(result.originalSize).toBe(2);
  });

  it("should not count whitespace characters when encoding", () => {
    let result = sut('" "');
    expect(result.encodedSize).toBe(6);
    expect(result.encoded).toBe(String.raw `"\"\""`);
  });

  it("should decode some of each", () => {
    let result = sut(Some_Of_Each);
    expect(result.decodedSize).toBe(31);
  });

  it('should count some of each', () => {
    let result = sut(Some_Of_Each);
    expect(result.originalSize).toBe(48);
  });

  it("should encode some of each", () => {
    let result = sut(Some_Of_Each);
    expect(result.encodedSize).toBe(67);
    expect(result.encoded).toBe(String.raw `"\"byc\\x9dyxuafof\\\\\\xa6uf\\\\axf\\\"ozomj\\\\olh\\x6a\"""\"b\""`);
  });

  it("should decode multiple rows of input", () => {
    let result = sut(Two_Chars_With_Line_Break);
    expect(result.decodedSize).toBe(2);
  });

  it('should count multiple rows of input', () => {
    let result = sut(Two_Chars_With_Line_Break);
    expect(result.originalSize).toBe(6);
  });

  it('should encode multiple rows of input', () => {
    let result = sut(Two_Chars_With_Line_Break);
    expect(result.encodedSize).toBe(14);
    expect(result.encoded).toBe(String.raw `"\"a\"""\"b\""`);
  });
});