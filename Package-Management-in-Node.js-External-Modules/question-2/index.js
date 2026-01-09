import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic (default style)
console.log(
  boxen(message, {
    title: title,
    titleAlignment: "center",
    padding: 1
  })
);

// 2. SingleDouble style
console.log(
  boxen(message, {
    title: title,
    titleAlignment: "center",
    padding: 1,
    borderStyle: "singleDouble"
  })
);

// 3. Round style
console.log(
  boxen(message, {
    title: title,
    titleAlignment: "center",
    padding: 1,
    borderStyle: "round"
  })
);
