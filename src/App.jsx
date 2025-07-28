import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth.js'
import {login, logout} from './store/authSlice'
import {Footer, Header} from './components'
import { Outlet } from 'react-router-dom'

function App() {
 
  
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((error)=>console.log(error, "Auth Error"))
    .finally(()=>{
      console.log("actionTaken")
      setLoading(false)})
  },[])

  return  (<div className='flex flex-col min-h-screen w-full'>
    <div className='w-full block'>
      <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
      <Footer />
    </div>

  </div>) 
}

export default App
