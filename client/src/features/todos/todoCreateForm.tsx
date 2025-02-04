import { BaseSyntheticEvent, useEffect } from "react";
import { useCreateTodoMutation } from "./createTodo.generated";

type TodoCreateFormProps = {
  onCreate: () => void;
};

const TodoCreateForm = ({ onCreate }: TodoCreateFormProps) => {
  const [createTodo, { isSuccess, isLoading }] = useCreateTodoMutation();

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const description = formData.get("description") as string;

    createTodo({
      description,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      onCreate();
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="description" placeholder="Description" />
      <button type="submit">{isLoading ? "Creating..." : "Create"}</button>
    </form>
  );
};

export { TodoCreateForm };
