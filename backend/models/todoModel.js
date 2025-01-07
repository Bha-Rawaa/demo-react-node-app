const db = require("../database/db");

const getTodos = async () => {
    const { rows } = await db.query("SELECT * FROM todos ORDER BY id ASC");
    return rows;
};

const createTodo = async (title) => { // Use 'title' here
    const { rows } = await db.query(
        "INSERT INTO todos (title) VALUES ($1) RETURNING *", // Insert 'title' into 'title' column
        [title]
    );
    return rows[0];
};



const updateTodo = async (id, title) => {
    const { rows } = await db.query(
        "UPDATE todos SET title = $1 WHERE id = $2 RETURNING *",
        [title, id]
    );
    return rows[0];
};

const deleteTodo = async (id) => {
    await db.query("DELETE FROM todos WHERE id = $1", [id]);
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
