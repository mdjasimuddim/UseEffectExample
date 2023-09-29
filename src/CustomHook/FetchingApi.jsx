import React, { useEffect, useState } from 'react'
import useHook from './useHook';

const FetchingApi = () => {

    const {data, loading, error} = useHook('https://jsonplaceholder.typicode.com/todos')

    const loadingMessage = "Message is loading....";
    const errorMessage = <p>{error}</p>

    const todosElement = data && data.map((todo) => {
        return (<div key={todo.id}>
            <h4>{todo.title}</h4>
        </div>)
    })
  return (
    <div>
        <h1>Todos</h1>
        {error && errorMessage }

        {todosElement}

        {loading && loadingMessage}

        
    </div>
  )
}

export default FetchingApi