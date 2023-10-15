const sentence = "hello there from lighthouse labs";
let interval = 50; //sets timeout wait time
for (let x = 0; x < sentence.length; x++) {
  setTimeout(() => {
    process.stdout.write(sentence[x]);
  }, interval);
  interval += 50; //increases timeout wait time each iteration
}
//adds new line after for loop as run and interval should be at its highest value
setTimeout(() =>
  process.stdout.write('\n'), interval);


