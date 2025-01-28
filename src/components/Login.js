import Header from './Header'
import { useDispatch } from 'react-redux'
import {useState, useRef} from 'react'
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from '../utils/firebase'
import { addUser } from "../utils/userSlice"
import { BACKGROUND_IMAGE, PROFILE_IMAGE } from '../utils/constants'

const Login = () => {

  const dispatch = useDispatch()
  const [isSignForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const username = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignForm)
  }

  const handleButtonClick = () => {
    const message = checkValidData(isSignForm, username?.current?.value, email.current.value, password.current.value)
    setErrorMessage(message)
    if(message) return

    if(!isSignForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user
        return updateProfile(user, 
          {
            displayName: username.current.value, 
            photoURL: PROFILE_IMAGE
          }
        )
      })
      .then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser
          dispatch(addUser(
            { 
              uid: uid, 
              email: email, 
              displayName: displayName, 
              photoURL: photoURL
            }
          ))
        })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setErrorMessage(errorCode + "-" + errorMessage)
      })
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        console.log("User signed in successfully.")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      })
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img 
          src= {BACKGROUND_IMAGE}
          alt="netflix-background" 
          className='h-screen object-cover md:h-auto md:object-none md:overflow-hidden'

        />
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="w-3/4 md:w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && 
        <input 
          ref={username} 
          type="text" 
          placeholder="Full Name" 
          className="p-4 mx-2 my-6 w-full bg-zinc-800 rounded-sm"
        />}
        <input 
          ref={email} 
          type="text" 
          placeholder="Email" 
          className="p-4 mx-2 my-6  w-full bg-zinc-800 rounded-sm"
        />
        <input 
          ref={password} 
          type="password" 
          placeholder="Password" 
          className="p-4 mx-2 my-6 w-full bg-zinc-800 rounded-sm"
        />
        <p className="text-red-600 font-bold text-lg p-2">
          {errorMessage}
        </p>
        <button 
          className="p-4 m-2 bg-red-600 w-full rounded-sm" 
          onClick={handleButtonClick}>
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p 
          className="py-4 m-2 cursor-pointer" 
          onClick={toggleSignInForm}
        >
          {isSignForm ? "New to Netflix? Sign Up Now" : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  )
}

export default Login