import React, { useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import  authService from './appwrite/auth'
import {login ,logout} from './store/authSlice'
import { Footer } from './components'
import { Header } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading ,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
authService.getCurrentUser()
.then((userData)=>{
  if (userData) {
    dispatch(login({userData}))
    
  } else {
    dispatch(logout())
    
  }
})

.finally(()=>setLoading(false))

  },[])
   
  return !loading ? (<div className='min-h-screen flex flex-wrap  bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main className='py-2 px-2'>
      <Outlet />
      </main>
      <Footer/>
      
      </div> 
  </div>) : null;

}

export default App
