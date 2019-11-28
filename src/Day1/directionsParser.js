const parser = input => {
  let firstVisitsBasement;

  var endingFloor = Array.from(input).reduce((prev, current, index) => {
    var acc = prev + (current === "(" ? 1 : -1);
    if (firstVisitsBasement === undefined && acc === -1) {
      firstVisitsBasement = index + 1;
    }
    return acc;
  }, 0);

  return { endingFloor, firstVisitsBasement };
};

export default parser;
