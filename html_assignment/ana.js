// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n=6;
{
  for (let i = 1; i <= n; i++)
   {
    let space = "";
    let hash = "";
    for (let j = 1; j <= n - i; j++) {
      space = space + " ";
    }
    for (let k = 1; k <= i; k++) {
      hash = hash + "#";
    }
    console.log(space + hash);
  }
}