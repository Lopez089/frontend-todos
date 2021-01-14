import React from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? "line-through" : "";

  return (
    <div>
      <div>
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}></span>
      </div>
      <div>
        <button onClick={() => updateTodo(todo)}>Complete</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
