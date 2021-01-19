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
    let response, addTodo;
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
      .then((res) => {
        response = res;
        return res.json();
      })
      .then((data) => (addTodo = data));
    return {
      response,
      addTodo,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async (todo: ITodo): Promise<any> => {
  try {
    let response, updateTodo;

    await fetch(`${baseUrl}/edit-todo/${todo._id}`, {
      method: "PUT",
      body: JSON.stringify({
        status: true,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        response = res;
        return res.json();
      })

      .then((data) => {
        updateTodo = data;
      });

    return {
      response,
      updateTodo,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (_id: string): Promise<any> => {
  try {
    let response, deleteTodo;
    await fetch(`${baseUrl}/delete-todo/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        response = res;
        return res.json();
      })
      .then((data) => (deleteTodo = data));
    return {
      response,
      deleteTodo,
    };
  } catch (error) {
    throw new Error(error);
  }
};
