import express from "express";
import { readFileSync, writeFileSync } from "fs";

const app = express();
app.use(express.json());

// const FILE = "./db.json";

// /* Read data from file */
// function readData() {
//   const data = readFileSync(FILE, "utf-8");
//   return JSON.parse(data);
// }

// /* Write data to file */
// function writeData(data) {
//   writeFileSync(FILE, JSON.stringify(data, null, 2));
// }

// /* Add user */
// app.post("/users", (req, res) => {
//   const data = readData();
//   data.users.push(req.body);
//   writeData(data);

//   res.send("User added");
// });

// /* Get user by ID */
// app.get("/users/:id", (req, res) => {
//   const data = readData();
//   const user = data.users.find(u => u.id == req.params.id);

//   if (!user) return res.send("User not found");

//   res.send(user);
// });

// app.put("/users/:id", (req, res) => {
//   const data = readData();
//   const user = data.users.find(u => u.id == req.params.id);

//   if (!user) return res.send("User not found");
//   user.name = req.body.name;  //postman
//   writeData(data)
//   res.send("user updated");
// });

// app.delete("/users/:id", (req, res) => {
//     const data = readData();
//     data.users = data.users.filter(u => u.id != req.params.id)
//     writeData(data)
//     res.send("user deleted")
// })

const users = [
    {id:1, name:"dhana",age:22, active:true},
    {id:2, name:"vr",age:22, active:false},
    {id:3, name:"vihaan",age:22, active:true},
    {id:4, name:"roopa",age:22, active:false},    
]

/* 
GET/users
Query params:
?active = true         -> Filtering
?sort = asc|desc       -> Sorting by age
?page=1&limit=2        -> Pagination
?search=amit           -> Seraching by name
*/
app.get("/users", (req, res) => {
    let result = [...users];

    //filtering

    if(req.query.active){
        const isActive = req.query.active == "true";
        result = result.filter(user => user.active == isActive)
        res.send(result)
    }
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
