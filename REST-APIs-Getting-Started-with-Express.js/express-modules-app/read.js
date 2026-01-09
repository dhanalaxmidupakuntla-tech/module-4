import fs from "fs/promises";

export async function readFileData() {
  try {
    const data = await fs.readFile("Data.txt", "utf-8");
    return data;
  } catch (error) {
    throw new Error("Unable to read Data.txt file");
  }
}
