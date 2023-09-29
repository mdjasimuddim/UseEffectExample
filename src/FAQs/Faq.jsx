import React, { useState } from 'react'

import style from './faq.module.css'

const Faq = (props) => {
    const {id, title, desc} = props.faq;
    const [toggle, setToggle] = useState(false)
  return (
    <article className={style.faq}>
        <div>
            <h4>{title}</h4>
            <button onClick={()=> setToggle(!toggle)}>{toggle ? '-':'+'}</button>
        </div>
        {toggle && <p>{desc}</p>}
    </article>
  )
}

export default Faq