import React from 'react'
import{useDispatch} from 'react-redux'
import authService from '../../appwrite/configg'
import {logout} from '../../store/authSlice'
function Logoutbtn() {

    const dispatch = useDispatch()  

    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch( logout() )
        })


    }
  return (
    <button className='inline-block px-6 py-2 duration-200 rounded-lg bg-red-500 hover:bg-red-600 text-white'>
        logOut
    </button>
  )
}

export default Logoutbtn
