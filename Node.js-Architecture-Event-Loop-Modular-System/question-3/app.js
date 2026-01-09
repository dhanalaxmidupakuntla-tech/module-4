// Part A – OS Module
import os from "os";
import fs from "fs/promises";

// ---- OS MODULE ----
try {
  console.log("Free Memory:", os.freemem());
  console.log("Total CPU Cores:", os.cpus().length);
} catch (error) {
  console.error("OS Module Error:", error.message);
}

// ---- FS MODULE CRUD ----
async function fileOperations() {
  try {
    // 1️⃣ Create data.txt
    await fs.writeFile("data.txt", "Hello World");
    console.log("data.txt created");

    // 2️⃣ Create Readme.md
    await fs.writeFile("Readme.md", "## This is first line in Readme");
    console.log("Readme.md created");

    // 3️⃣ Read data.txt
    const data = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt:");
    console.log(data);

    // 4️⃣ Append to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");
    console.log("Data appended to data.txt");

    // 5️⃣ Delete Readme.md
    await fs.unlink("Readme.md");
    console.log("Readme.md deleted");

  } catch (error) {
    console.error("File System Error:", error.message);
  }
}

// Call function
fileOperations();
