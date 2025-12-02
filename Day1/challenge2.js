const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

const parsedInput = input.split("\n");

const add = (lockPosition, lockInput) => {
  let numOfZeros = 0;
  while (lockInput) {
    if (lockPosition < 99) {
      lockPosition++;
    } else {
      lockPosition = 0;
      numOfZeros++
    }
    lockInput--;
  }

  return [lockPosition, numOfZeros];
};

const substract = (lockPosition, lockInput) => {
  let numOfZeros = 0
  while (lockInput) {
    if (lockPosition > 0) {
      lockPosition--
    } else {
      lockPosition = 99
      numOfZeros++
    }
    lockInput--
  }
  return [lockPosition, numOfZeros];
};

const lookThroughInput = (input) => {
  let lockPosition = 50;
  let numOfZeros = 0;

  for (let line of input) {
    const direction = line[0];
    const numberToRotate = Number(line.slice(1));
    // console.log(`line: ${line}
    // direction: ${direction}
    // numberToRotate: ${numberToRotate}
    //     `)
    if (direction === "R") {
      const results = add(lockPosition, numberToRotate)
      lockPosition = results[0]
      numOfZeros += results[1]
      console.log('LINE: ', line)
      console.log('ZEROS: ', numOfZeros)
    } else if (direction === "L") {
      const results = substract(lockPosition, numberToRotate)
      lockPosition = results[0]
      numOfZeros += results[1]
      console.log('LINE: ', line)
      console.log('ZEROS: ', numOfZeros)
    } else {
      console.log("SOMETHING IS WRONG");
    }
  }
  // console.log(numOfZeros)
  return numOfZeros;
};

console.log('FINAL: ', lookThroughInput(parsedInput));
