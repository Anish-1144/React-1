import React from 'react'
import {container,logo,logoutbtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Header() {
const authState = useSelector((state) => state.auth.status)


  return (
    <>

   <div>header</div>

      
    </>
  )
}

export default Header
