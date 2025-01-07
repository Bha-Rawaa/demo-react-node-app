import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, TextField, List, ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const API_URL = process.env.REACT_APP_API_URL ;

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    // Fetch all todos
    useEffect(() => {
        axios.get(API_URL).then((res) => setTodos(res.data));
    }, []);

    const addTodo = async () => {
        if (!newTodo || newTodo.trim() === "") return;
        try {
            const res = await axios.post(API_URL, { title: newTodo });
            if (res.data) {
                setTodos([...todos, res.data]);
            }
            setNewTodo(""); // Clear input
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    const updateTodo = async (id, title) => {
        const updatedTitle = prompt("Update weather Info:", title);
        if (!updatedTitle || updatedTitle.trim() === "") return;
        try {
            const res = await axios.put(`${API_URL}/${id}`, { title: updatedTitle });
            if (res.data) {
                setTodos(
                    todos.map((todo) =>
                        todo.id === id ? { ...todo, title: res.data.title } : todo
                    )
                );
            }
        } catch (error) {
            console.error("Error updating weather:", error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Error deleting weather:", error);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f4f4f4',
                padding: '5px',
            }}
        >
            <Typography variant="h4" gutterBottom>
                New weather Info ? 
                </Typography>
            <TextField
                sx={{
                    width: '50%',
                    marginBottom: '20px',
                }}
                label="Add a new weather Info"
                variant="outlined"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button
                sx={{
                    marginBottom: '30px',
                }}
                variant="contained"
                color="primary"
                onClick={addTodo}
            >
                Add
            </Button>

            <List sx={{
                width: '50%',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: 3,
                maxHeight: '400px',
                overflowY: 'auto',
            }}>
                {todos.map((todo) => (
                    <ListItem key={todo.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText primary={todo.title} />
                        <Box>
                            <IconButton onClick={() => updateTodo(todo.id, todo.title)} edge="end">
                                <Edit />
                            </IconButton>
                            <IconButton onClick={() => deleteTodo(todo.id)} edge="end">
                                <Delete />
                            </IconButton>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default TodoApp;
