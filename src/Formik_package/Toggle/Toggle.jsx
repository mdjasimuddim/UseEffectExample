import React, {useState} from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(true)
    console.log(toggle)
    return (
      <div style={{backgroundColor:'pink', padding:'1rem', margin:'1rem'}}>
        {toggle && (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius suscipit saepe optio qui non voluptatibus culpa earum illo! Voluptatem sed, praesentium ipsum reprehenderit perspiciatis unde! Fugiat ut eius reprehenderit?</p>)}
        <div style={{textAlign:'center'}}>
          <button onClick={()=> setToggle(!toggle)}>{toggle ? "Hide" : "Show" }</button>
        </div>
      </div>
    )
}

export default Toggle