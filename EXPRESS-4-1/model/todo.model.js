import fs from "fs";

//Read data from db.json
export const readData = () =>{
    const data = fs.readFileSync("db.json", "utf-8");
    return JSON.parse(data);
}

//write data to db.json
export const writeData = (data) => {
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};