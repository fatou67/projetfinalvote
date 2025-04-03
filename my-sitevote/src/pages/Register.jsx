import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [userData, setUserData] = React.useState({fullName: '', email: '', password: '', password2: ''})

  //function to chnge sur controlled inputs

const changeInputHandler = (e) => {
  setUserData(prevState => {
    return {...prevState, [e.target.name]: e.target.value}

  })

}
console.log(userData)



  return (
   <section className='register' >
    <div className=' container register__container'>
      <h2>Sign Up</h2>
      <form>
        <p className='form_error-message'> Any error from the backend</p>
        <input type="text" name ='fullName' placeholder='Full Name' onChange={ changeInputHandler}   autoComplete='true'  autoFocus/>
        <input type="email" name ='email' placeholder='Email Adress' onChange={ changeInputHandler}  autoComplete='true'/>
        <input type="password" name ='password' placeholder='Password' onChange={ changeInputHandler}  autoComplete='true'/>
        <input type="password" name ='password2' placeholder='Confirm Password' onChange={ changeInputHandler}  autoComplete='true' />
        <p> Already have an account? <Link to='/Register'>sign in </Link></p>
        <button type='submit' className='btn primary'>Register</button>
        
        


      </form>
       
    </div>
   </section>
  )
}

export default Register