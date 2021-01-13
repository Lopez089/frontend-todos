import React, {useState, useEffect} from 'react'


/* TODO:

    [x] crear el formulario
    [x] recoger lo que el usuario escribe y guardarlo en el stado
    SUGERENCIA DE BUSQUEDA
    [x] crear un estado de eso 
    [x] si el estaqdo estaq basio no lo muestra si el estado exite aparece
    [x] mostrar datos del stado
    [x] traer los datos y poner en el stado 
    [x] crear un useeffect cuando se varia la search se busca
    [] feature selecionar de la sugerencia y se pone en el buscador
*/



const SearchTodo = ()=>{
    const [search, setSearch] = useState<string | undefined>()
    const [dropdownSearch, setDorpdownSearch] = useState<string[]>()

    const handleSearch = (e:any): void=>{
        setSearch(e.target.value)
    }

    const getSearchSuggestion = async():Promise<void>=> {
        fetch(`http://localhost:4000/search-todo/?search=${search}`)
            .then(res => res.json())
            .then(data => setDorpdownSearch(data.search))
            .then(Error=> Error)
    }

    useEffect(()=>{
        
        if(search === '') {
            setDorpdownSearch([])
        }else{
            getSearchSuggestion()
        }
    },[search])

    return (
    <>
        <input type='search' id='search' name='search' onChange={handleSearch}/>
        <button>Search</button>
        {
            dropdownSearch === undefined? (
                null
            ): (
                <div className="dropdown-content">
                    {dropdownSearch.map((input:string , i:number)=> <p key={i}>{input}</p>)}
                </div>
            )
        }
    </>
    )
}

export default SearchTodo