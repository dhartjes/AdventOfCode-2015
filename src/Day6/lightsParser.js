import lineEndingFixer from "../utils/lineEndingFixer";

export default input => {
  let lines = lineEndingFixer(input)
    .trim()
    .split("\n");
  let instructions = [];

  lines.forEach(line => {
    let coords = line.match(/\d+/g);

    instructions.push({
      command: line.match(/\D+/)[0].trim(),
      startingPoint: { x: +coords[0], y: +coords[1] },
      endingPoint: { x: +coords[2], y: +coords[3] }
    });
  });

  return instructions;
};

export const runLightShow = (lightsArray, instructions) => {
  instructions.forEach(instruction =>
    ({
      "turn on": () =>
        lightsArray.turnOn(instruction.startingPoint, instruction.endingPoint),
      "turn off": () =>
        lightsArray.turnOff(instruction.startingPoint, instruction.endingPoint),
      toggle: () =>
        lightsArray.toggle(instruction.startingPoint, instruction.endingPoint)
    }[instruction.command]())
  );
};
