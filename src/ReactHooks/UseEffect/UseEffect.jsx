import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count , setCount] = useState(0)
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        console.log('useEffect');
    }, [count])
  return (
    <div>
        {console.log("Rendering")}
        <h4>count : {count}</h4>
        <button onClick={() => {setCount(count => count + 1)}}>+</button>
        <button onClick={() => {setLoading(!loading)}}>isLoading</button>

    </div>
  )
}

export default UseEffect