"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import TodoHeader from "../app/components/TodoHeader";
import TodoForm from "../app/components/TodoForm";
import TodoList from "../app/components/TodoList";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "" });
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoTitle, setEditTodoTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/todo");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.title) return;

    try {
      const response = await axios.post("/api/todo", newTodo);
      setTodos([response.data, ...todos]);
      setNewTodo({ title: "" });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (id) => {
    if (!editTodoTitle) return;

    try {
      const response = await axios.put("/api/todo", {
        id,
        title: editTodoTitle,
      });
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? response.data : todo
      );
      setTodos(updatedTodos);
      setEditTodoId(null);
      setEditTodoTitle("");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todo?id=${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="w-full min-h-screen py-20 flex justify-center flex-col items-center px-4 bg-blue-50">
      <TodoHeader />
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <TodoList
        todos={todos}
        editTodoId={editTodoId}
        editTodoTitle={editTodoTitle}
        setEditTodoId={setEditTodoId}
        setEditTodoTitle={setEditTodoTitle}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        loading={loading}
      />
    </div>
  );
};

export default TodoPage;
