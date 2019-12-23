import md5 from "md5";

export const hash = input => {
  return md5(input);
};

const miner = (key, coinCondition = "00000") => {
  let index = 0;
  let hashed = "";
  let conditionMet = () => hashed.startsWith(coinCondition, 0);

  while (!conditionMet()) {
    hashed = md5(key + ++index); /*?*/
  }

  return { hashed, index };
};

export default miner;
