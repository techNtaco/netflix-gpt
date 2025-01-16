import React from 'react'
import {useState} from 'react'
import Header from './Header'

const Login = () => {
  
  const [isSignForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignForm)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg" alt="netflix-background" />
      </div>
      <form className="w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignForm && <input type="text" placeholder="Full Name" className="p-4 mx-2 my-6 w-full bg-zinc-800 rounded-sm"/>}
        <input type="text" placeholder="Email Or mobile number" className="p-4 mx-2 my-6  w-full bg-zinc-800 rounded-sm"/>
        <input type="password" placeholder="Password" className="p-4 mx-2 my-6 w-full bg-zinc-800 rounded-sm"/>
        <button className="p-4 m-2 bg-red-600 w-full rounded-sm">{isSignForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 m-2 cursor-pointer" onClick={toggleSignInForm}>{isSignForm ? "New to Netflix? Sign Up Now" : "Already a User? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login