import { useEffect } from "react";
import { useDeleteTodoByIdMutation } from "./deleteTodo.generated";
import { useGetTodosQuery } from "./getTodos.generated";
import { useUpdateTodoByIdMutation } from "./updateTodoById.generated";

const TodoList = () => {
  const { data, isLoading, isSuccess, refetch } = useGetTodosQuery();
  const [
    deleteTodo,
    { isSuccess: isSuccessDelete, isLoading: isLoadingDelete },
  ] = useDeleteTodoByIdMutation();

  const [
    updateTodo,
    { isSuccess: isSuccessUpdate, isLoading: isLoadingUpdate },
  ] = useUpdateTodoByIdMutation();

  useEffect(() => {
    if (isSuccessDelete) {
      refetch();
    }
  }, [isSuccessDelete]);

  useEffect(() => {
    if (isSuccessUpdate) {
      refetch();
    }
  }, [isSuccessUpdate]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isSuccess &&
        data.allTodos?.nodes.map((todo) => {
          const DescriptionTag = todo.completed ? "del" : "span";
          return (
            <div key={todo.id}>
              <DescriptionTag>{todo.description}</DescriptionTag>
              <button
                onClick={() => {
                  deleteTodo({ id: todo.id });
                }}
              >
                {isLoadingDelete ? "Deleting..." : "Delete"}
              </button>
              <button
                onClick={() => {
                  updateTodo({
                    id: todo.id,
                    todoPatch: {
                      completed: !todo.completed,
                    },
                  });
                }}
              >
                {isLoadingUpdate
                  ? "Updating..."
                  : todo.completed
                  ? "Uncomplete"
                  : "Complete"}
              </button>
            </div>
          );
        })}
    </>
  );
};

export { TodoList };
