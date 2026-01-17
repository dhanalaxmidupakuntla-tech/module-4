// ROUTES/USERS.JS
import express from "express"

const router = express.Router();

// In-memory ser arrat (could also impor from a db file)
let users = [
    {id: 1, name :"dhana"},
    {id : 2, name: "laxmi"}
]

//Get all users
router.get("/", (req, res) => res.jsom(users));

//GET single user
router.get("/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    res.json(user || {message: "User not found"})
})

//POST user
router.post("/", (req, res) => {
    const {id, name} = req.body;

    //optional: check for duplicate id
    if(users.find(u => id.id === id)){
        return res.status(400).json({messge: "ID already exists"});
    }

    user.push({id, name});
    res.json()
})

//PUT user
router.put("/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) return res.status(404).json ({message: "User not found"});

    user.name = req.body.name ?? user.name;
    res.json({message: "User updated", users});
});

//Delete
router.delete("/:id", (req, res) => {
    users = users.filter(u => u.id !== Number(req.params.id));
    res.json({message: "User deleted", users});
});

export default router;