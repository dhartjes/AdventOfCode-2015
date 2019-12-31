export default function (input) {
  let lines = input
    .trim()
    .split("\n")
    .filter(Boolean);

  let decoded = lines.reduce(
    (prev, current) => prev + reduceLine(current),
    ''
  );

  let encoded = lines.reduce(
    (prev, current) => prev + augmentLine(current),
    ''
  );

  return {
    decoded,
    decodedSize: decoded.length,
    originalSize: input.replace(/\s/g, "").length,
    encoded,
    encodedSize: encoded.length
  };
}

const augmentLine = input => {
  let lessWhiteSpaceChars = input.replace(/\s/g, "");
  let withEscapedBackslashes = lessWhiteSpaceChars.replace(/\\/g, "\\\\");
  let withEscapedQuotes = withEscapedBackslashes.replace(/"/g, '\\"');
  let withSurroundingQuotes = `"${withEscapedQuotes}"`;
  return withSurroundingQuotes;
};

const reduceLine = input => {
  let lessWhiteSpaceChars = input.replace(/\s/g, "");
  let lessEscapedBackslashes = lessWhiteSpaceChars.replace(/\\\\/g, "|");
  let lessEscapedQuotes = lessEscapedBackslashes.replace(/\\"/g, "|");
  let lessCharCodes = lessEscapedQuotes.replace(/\\x[0-9a-fA-F]{2}/g, "|");
  let lessOpenAndCloseQuotes = lessCharCodes.substring(
    1,
    lessCharCodes.length - 1
  );
  return lessOpenAndCloseQuotes;
};