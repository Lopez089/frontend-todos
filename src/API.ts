const baseUrl: string = "http://localhost:4000";

export const getTodos = async (): Promise<void> => {
  try {
    await fetch(`${baseUrl}/todo`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodo = async (formData: ITodo): Promise<void> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };

    await fetch(`${baseUrl}/add-todo`, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((res) => console.log("success:", res));
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async (todo: ITodo): Promise<void> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };
    await fetch(`${baseUrl}/edit-todo/${todo._id}`, {
      method: "PUT",
      body: JSON.stringify({
        status: todoUpdate,
      }),
      headers: {
        "content-type": "aplication/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (_id: string): Promise<void> => {
  try {
    await fetch(`${baseUrl}/delete-todo/${_id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw new Error(error);
  }
};
