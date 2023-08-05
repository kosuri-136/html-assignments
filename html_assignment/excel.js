let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


function excel(column) 
{
    let alphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    let result = "";
    while (column > 0) 
    {
      let rem = column % 26;
      if (rem === 0) 
      {
        rem = 26;
        column = column - 26;
      }
      result = alphabet[rem - 1] + result;
      column = Math.floor(column/26);
    }
    return result;
  }
  let n =parseInt(readLine());
  for (let i=0; i<n; i++){
    let column = parseInt(readLine());
    console.log(excel(column));
}