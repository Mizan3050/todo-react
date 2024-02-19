import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleStatus, deleteTodo }) {
  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            toggleStatus={toggleStatus}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
