import  fs  from "fs";
import  readline  from "readline"
import { CardinalPoint } from "./classes/cardinalPoint";
import Plateau from "./classes/plateau";
import Rover from "./classes/rover";
import { Direction } from "./enum/directions";


const main = async () => {

  try {
    const lines = Array<string>();
    const file = readline.createInterface({
      input: fs.createReadStream("./src/documents/rovers.txt"),
      output: process.stdout,
      terminal: false
    });
  
    for await (const line of file) {
      lines.push(line);
    }
  
    const [x, y] = getPlateauCoords(lines);
  
    new Plateau(x, y);
    for (const line of lines) {
      const [x, y, d] = getRoverCoords(lines)
      var rover = new Rover(Number(x), Number(y), d)
      rover.navigate(lines.shift());
    }
  } catch({message}) {
    console.log(message);
  }
}

const getPlateauCoords = (lines: string[]) => {
  const plateauCoords = lines.shift().split(' ');
  if(plateauCoords.length != 2) {
    throw new Error("Invalid input, please check if the file is formated correctly and try again")
  }
  if(plateauCoords.filter(x => isNaN(Number(x))).length > 0) {
    throw new Error("Invalid input, please check if the file is formated correctly and try again")
  }
  return plateauCoords.map(x => Number(x));
}


const getRoverCoords = (lines: string[]) => {
  const roverCoords = lines.shift().split(' ');
  if(roverCoords.length != 3) {
    throw new Error("Invalid input, please check if the file is formated correctly and try again")
  }
  if(roverCoords.slice(0,2).filter(x => isNaN(Number(x))).length > 0) {
    throw new Error("Invalid input, please check if the file is formated correctly and try again")
  }
  const direction = roverCoords.slice(2)[0].toLocaleUpperCase();
  if((/[NWSE]/.test(direction) == false) || direction.length != 1) {
    throw new Error(`Invalid cardinal point ${direction}`)
  }
  return roverCoords
}

main();