import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "src", "db.json");

export const readData = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
};

export const writeData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};
