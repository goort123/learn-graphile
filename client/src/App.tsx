import "./App.css";
import { useGetTodosQuery } from "./features/todos/getTodos.generated";
import { TodoCreateForm } from "./features/todos/todoCreateForm";
import { TodoList } from "./features/todos/todoList";

function App() {
  const { refetch } = useGetTodosQuery();

  const handleCreateTodo = () => {
    refetch();
  };

  return (
    <>
      <TodoCreateForm onCreate={handleCreateTodo} />
      <TodoList />
    </>
  );
}

export default App;
