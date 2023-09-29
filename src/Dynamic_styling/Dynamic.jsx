import React, { useState } from 'react'

const Dynamic = () => {
    const [error, setError] = useState(false);
  return (
    <div>
        <h2 style={{color:error ? "red" : "blue", backgroundColor: error ? "yellow" : "red", padding:'1rem', textAlign:'center'}}>Md Jasim Uddim</h2>
    </div>
  )
}

export default Dynamic