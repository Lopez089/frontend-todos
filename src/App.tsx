import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem/index";
import AddTodo from "./components/AddTodo/index";
import {getTodos, addTodo, updateTodo, deleteTodo} from './API'


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = ():void =>{
    getTodos()
    .then(({data: {todos}}: ITodos[]| any)=> setTodos(data))
    .catch((err:Error)=> console.log(err))
  }

    useEffect(() => {
      fetchTodos();
    }, []);

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void =>{
    e.preventDefault()
    addTodo(formData)
      .then(({status, data})=>{
        if(status!== 201){
          throw new Error('Error! Todo nos saved')
        }
        setTodos(data.todos)
      })
      .catch(err =>console.log(err))
  }

  const handleUpdateTodo = (todo: ITodo):void=>{
    updateTodo(todo)
      .then(({status, data})=>{
        if(status !== 200){
          throw new Error('Error! Todo not delated')
        }
      })
      setTodos(data.todos)
      .catch(err => console.log(err))
  }

  const handleDeleteTodo(_id: string):void=>{
    deleteTodo(_id)
      .then(({status, data})=>{
        if(status !== 200){
          throw new Error('Error! Todo not deleted')
        }
        setTodos(data.todos)
      })
      .catch(err=> console.log(err))
  }

  return (
  <main>
    <h1>My Todos</h1>
    <AddTodo saveTodo={handleSaveTodo}/>
    {todos.map((todo: ITodo)=>{
      <TodoItem 
        key={todo._id}
        updateTodo={handleUpdateTodo}
        deleteTodo={handleDeleteTodo}
        todo={todo}
        />
    })}
  </main>)
};

export default App;
