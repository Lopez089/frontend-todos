import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem/index";
import AddTodo from "./components/AddTodo/index";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./API";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then((todos) => setTodos(todos.todos))
      .catch((err: Error) => console.error(err));
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ response, addTodo }) => {
        if (response.status !== 201) {
          throw new Error("Error! Todo nos saved");
        }
        setTodos(addTodo.todos);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateTodo = async (todo: ITodo): Promise<any> => {
    await updateTodo(todo)
      .then(({ updateTodo, response }) => {
        if (response.status !== 200) {
          throw new Error("Error! Todo not update");
        }
        setTodos(updateTodo.todos);
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ response, deleteTodo }) => {
        if (response.status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        setTodos(deleteTodo.todos);
      })
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  );
};

export default App;
