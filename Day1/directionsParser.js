function parser(input) {
  var sorted = [...input].sort();
  var openFirst = sorted[0] == "(";

  var changeIndex = sorted.indexOf(openFirst ? ")" : "(");

  var set1 = changeIndex;
  var set2 = input.length - changeIndex;

  return (openFirst ? 1 : -1) * (set1 - set2);
}

export default parser;
