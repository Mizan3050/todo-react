import "./styles.css";
import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
export default function App() {
  const [todos, setTodos] = useState([]);

  function addATodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
  }

  function toggleStatus(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        } else return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm addATodo={addATodo} />
      <div className="header">Todo List</div>
      <TodoList
        todos={todos}
        toggleStatus={toggleStatus}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
