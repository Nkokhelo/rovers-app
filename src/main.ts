import  fs  from "fs";
import  readline  from "readline"

// const file = fs.readFileSync("./documents/rovers.txt", { encoding: "utf-8" });

async function main() {
  const lines = Array();
  const file = readline.createInterface({
    input: fs.createReadStream("./src/documents/rovers.txt"),
    output: process.stdout,
    terminal: false
  });
  for await (const line of file) {
    lines.push(line);
  }
  console.log(lines);
}

main();