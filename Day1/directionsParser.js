function parser(input) {
  let sorted = [...input].sort();
  let openFirst = sorted[0] == "(";

  let changeIndex = sorted.indexOf(openFirst ? ")" : "(");

  let set1 = changeIndex;
  let set2 = input.length - changeIndex;

  return (openFirst ? 1 : -1) * (set1 - set2);
}

export default parser;
