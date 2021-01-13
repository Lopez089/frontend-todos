import React, { useState} from 'react'

type Props = {
    saveTodo: (e: React.FormEvent, formDate: ITodo| any)=> void
}

const AddTodo: React.FC<Props> = ({saveTodo})=>{
    const [formData, setFormData] = useState<ITodo | {}>()

//--------------------- DUDA---------------------------//

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void =>{
        setFormData({
            ...formData, 
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form onSubmit={(e)=>saveTodo(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleForm} type="text" id='name'/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input onChange={handleForm} type="text" id='description'/>
                </div>
                <button disabled={formData === undefined ? true : false}>AddTodo</button>
            </div>
        </form>
    )
}

export default AddTodo 