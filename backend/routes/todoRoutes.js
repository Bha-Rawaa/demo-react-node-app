const express = require("express");
const router = express.Router();
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} = require("../models/todoModel");

router.get("/", async (req, res) => {
    const todos = await getTodos();
    res.json(todos);
});

router.post("/", async (req, res) => {
    const { title } = req.body;  // Make sure to use 'title' instead of 'description'
    const newTodo = await createTodo(title);
    res.json(newTodo);
});


router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const updatedTodo = await updateTodo(id, title);
    res.json(updatedTodo);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await deleteTodo(id);
    res.sendStatus(204);
});

module.exports = router;
