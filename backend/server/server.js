const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../database/db");
const todoRoutes = require("../routes/todoRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

db.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Database connected successfully at:", res.rows[0].now);
    }
});
