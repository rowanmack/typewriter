const sentence = "hello there from lighthouse labs";

const printOut = (text) => {
  let delay = 0;
  let lastElem = text.length - 1;
  text += '\n'
  for (const char of text) {
      setTimeout(() => {
        process.stdout.write(char);
      }, delay);
      delay += 50;
  }
};

printOut(sentence);