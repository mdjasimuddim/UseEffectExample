import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const AddNewTodo = () => {
        toast('Added new Element');
    }
    const RemoveTodo = () => {
        toast('Removed New Todo');
    }
  return (
    <div>
        <button onClick={AddNewTodo}>Add New Todo</button>
        <button onClick={RemoveTodo}>Remove New Todo</button>
        <ToastContainer />

    </div>
  )
}

export default Toastify