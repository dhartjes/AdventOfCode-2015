import lineEndingFixer from "../utils/lineEndingFixer";

export default function(input) {
  let lines = input //lineEndingFixer(input)
    .trim()
    .split("\n")
    .filter(Boolean);

  let reducedSize = lines.reduce(
    (prev, current) => prev + reduceLine(current),
    0
  );

  let increasedSize = lines.reduce(
    (prev, current) => prev + augmentLine(current),
    0
  );

  return {
    reducedSize,
    originalSize: input.replace(/\s/g, "").length,
    increasedSize
  };
}

const augmentLine = input => {
  let lessWhiteSpaceChars = input.replace(/\s/g, "");
  let withEscapedBackslashes = lessWhiteSpaceChars.replace(/\\\\/g, "\\\\\\\\");
  let withEscapedQuotes = withEscapedBackslashes.replace(/"/g, '\\"');
  return withEscapedQuotes.length;
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
  return lessOpenAndCloseQuotes.length;
};
