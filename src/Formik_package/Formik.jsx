import React, { useState } from 'react'
import { useFormik } from 'formik';



const Formik = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
        },
        onSubmit: (values, {resetForm}) => {
            console.log(JSON.stringify(values));
            resetForm({values:''})
        }
      });
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const onNameHandle = (event) => {
    //     setName(event.target.value);
    // }
    // const onEmailHandle = (event) => {
    //     setEmail(event.target.value);
    // }
    // const onPasswordHandle = (event) => {
    //     setPassword(event.target.value);
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const user = {
    //         name, 
    //         email,
    //         password
    //     }
    //     console.log(user)
    // }
  return (
    <div>
        <h2>SignUp</h2>
        <form action="" onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" name = "name" id = "name" onChange={formik.handleChange} value={formik.values.name} />
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input type="email" name = "email" id = "email" onChange={formik.handleChange} value={formik.values.email}/>
            </div>
            <div>
                <label htmlFor="">Password: </label>
                <input type="password" name = "password" id = "password" onChange={formik.handleChange} value={formik.values.password}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Formik