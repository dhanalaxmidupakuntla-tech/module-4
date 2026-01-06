const f = require("fs");
// let d = f.readFileSync("./data.txt", {encoding:"utf-8"});
// console.log(d);

f.writeFileSync("./d2.txt", "nodejs is very powerful");
console.log("File written successfully.");