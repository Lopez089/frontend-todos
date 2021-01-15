const baseUrl: string = "http://localhost:4000";

export const getTodos = async (): Promise<any> => {
  try {
    let todos = await fetch(`${baseUrl}/todos`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));

    return todos;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodo = async (formData: ITodo): Promise<any> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
      folder: "casa",
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

export const updateTodo = async (todo: ITodo): Promise<any> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };

    await fetch(`${baseUrl}/edit-todo/${todo._id}`, {
      method: "PUT",
      body: JSON.stringify({
        status: true,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (_id: string): Promise<any> => {
  try {
    await fetch(`${baseUrl}/delete-todo/${_id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw new Error(error);
  }
};
