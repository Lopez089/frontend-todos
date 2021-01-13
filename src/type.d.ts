interface ITodo{
    _id: string,
    name: string,
    description: string,
    status: boolean,
    createdAt?: string, 
    updatedAt?: string
}

interface TodoProps{
    todos: Itodo
}

type ApiDateType = {
    message: string,
    status: string, 
    todos: ITodo[], 
    todos?: ITodos
} 