import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [userData, setUserData] = React.useState({fullName: '', email: '', password: '', password2: ''})

  //function to chnge sur controlled inputs

const changeInputHandler = (e) => {
  setUserData(prevState => {
    return {...prevState, [e.target.name]: e.target.value}

  })

}



  return (
   <section className='register' >
    <div className=' container register__container'>
      <h2>Sign in</h2>
      <form>
        <p className='form_error-message'> Any error from the backend</p>
        <input type="text" name ='fullName' placeholder='Full Name' onChange=
        { changeInputHandler}   autoComplete='true'  autoFocus/>
       
        <input type="password" name ='password' placeholder='Password' onChange=
        { changeInputHandler}  autoComplete='true'/>
        
        <p> dont' have an account? <Link to='/register'>sign up  </Link></p>
        <button type='submit' className='btn primary'>Login</button>
        
        


      </form>
       
    </div>
   </section>
  )
}

export default Login