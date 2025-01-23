import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setpassword] = useState("")

  const handleLogin = (e)=>{
    e.preventDefault()
    console.log(username)
    console.log(password)
  }

  const usernameChange=(e)=>{
    const name = e.target.value
    console.log(name)
    setUsername(name)
  }

  const passwordChange= (e)=>{
    const password = e.target.value
    console.log(password)
    setpassword(password)
  }
  return (
    <div className='login-cont'>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input type="text" name='username' onChange={usernameChange}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={passwordChange} />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login