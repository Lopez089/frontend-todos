interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  folder: string;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: Itodo;
}

type ApiDateType = {
  message: string;
  status: string;
  todos: ITodo[];
  todos?: ITodos;
};
