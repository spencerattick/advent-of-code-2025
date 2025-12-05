const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`;

const parsedInput = input.split(",");

const checkValidity = (id) => {
  const stringId = id.toString();
  let pattern = stringId[0]
  let toCountBy = 1

  //need to check if the first char is the same as all the others
  //if yes - it's valid
  //need to check if the first two chars are the same as the next two and so on
  //if yes - it's valid
  //need to check if the first three chars are the same as the next three and so on
  //...


  for (let i = 0; i < stringId.length; i+=toCountBy) {
    if (pattern.length === stringId.length) {
        return
    }
    if (stringId[i] !== stringId[0]) {
      pattern+=stringId[i]
      toCountBy++
      i = 0
    }
  }
  console.log('id: ', id)
  console.log('string: ', stringId);
};

const loopThroughIds = (input) => {
  const invalidIds = [];
  for (let range of input) {
    const split = range.split("-");
    const firstNum = Number(split[0]);
    const seconNum = Number(split[1]);
    for (let i = firstNum; i <= seconNum; i++) {
      const isInvalid = checkValidity(i);
      invalidIds.push(isInvalid);
    }
  }
  return invalidIds.reduce((acc, current) => {
    return acc + current;
  }, 0);
};

loopThroughIds(parsedInput)