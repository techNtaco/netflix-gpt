import { useEffect } from "react"
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { removeGpt, toggleGptSearchView } from "../utils/gptSlice"
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { changeLanguage, removeConfig } from "../utils/configSlice"
import { removeMovies } from "../utils/moviesSlice"

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleSignOut = () => {    
    signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
    })
    .catch((error) => {
      console.log("Error signing out:", error.message);
    });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())

  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const { uid, email, displayName, photoURL} = user
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        dispatch(removeMovies())
        dispatch(removeGpt())
        dispatch(removeConfig())
        navigate("/")
      }
    })
    return () => unsubscribe()
  }, [])


  return (
    <div 
      className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex flex-col md:flex-row justify-between'
    >
      <img 
        className='w-44 mx-auto md:mx-0' 
        src={LOGO}
        alt="netflix-logo"
      />
      {user &&
      <div className='flex p-4 justify-center md:justify-normal'>  
        {showGptSearch && <select 
          className="px-3 rounded-lg"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
        </select>}
        <button 
          className="mx-3 px-3 bg-blue-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Home Page" : "AI Search"}
        </button>
        <img 
          className="w-10 h-10" 
          alt="user-icon" 
          src={user?.photoURL}
        />
        <button 
          onClick={handleSignOut} 
          className='font-bold pl-3 text-white'
        >
          Sign Out
        </button>
      </div>}
    </div>

  )
}

export default Header