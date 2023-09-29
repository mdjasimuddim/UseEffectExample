import React, { useEffect, useState } from 'react'
const loadingMessage = "Message is loading....";

const FetchingApi = () => {
    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/to')
            .then((res) => {
                if(!res.ok){
                    throw Error('fetching is not successful');
                }else{
                    return res.json()
                }
            })
            .then((data) => {
                setTodos(data)
                setLoading(false)
                setError(null)
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
        },2000)
    },[])
    const todosElement = todos && todos.map((todo) => {
        return (<div key={todo.id}>
            <h4>{todo.title}</h4>
        </div>)
    })
  return (
    <div>
        <h1>Todos</h1>
        {error && <p>{error}</p>}

        {todosElement}

        {loading && loadingMessage}

        
    </div>
  )
}

export default FetchingApi