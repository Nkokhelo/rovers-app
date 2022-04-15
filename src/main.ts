import  fs  from "fs";
import  readline  from "readline"
import { CardinalPoint } from "./classes/cardinalPoint";
import Plateau from "./classes/plateau";
import Rover from "./classes/rover";
import { Direction } from "./enum/directions";
// import  Direction  from "./classes/direction";

// const file = fs.readFileSync("./documents/rovers.txt", { encoding: "utf-8" });

const main = async () => {

  const lines = Array<string>();
  const file = readline.createInterface({
    input: fs.createReadStream("./src/documents/rovers.txt"),
    output: process.stdout,
    terminal: false
  });

  for await (const line of file) {
    lines.push(line);
  }

  const [x, y] = lines.shift().split(' ').map(cord => Number(cord));
  new Plateau(x, y);
  for (const line of lines) {
    const [x, y, d] = lines.shift().split(' ').map(input => input);
    var rover = new Rover(Number(x), Number(y), d)
    rover.navigate(lines.shift());
  }
 
  
}


main();