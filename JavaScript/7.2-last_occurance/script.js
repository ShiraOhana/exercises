let string = "The more you know, the more you know that you don't know";

const lastOccurance = (str) => {
  let index = 0;
  while (str.indexOf("you", index) != -1) {
    index++;
  }
  return index - 1;
};

console.log(lastOccurance(string));
