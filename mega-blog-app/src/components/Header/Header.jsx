import React from 'react'
import {Container ,Logo,Logoutbtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import Container from '../container/Container'



function Header() {
const authStatus = useSelector((state) => state.auth.status)

const navigate = useNavigate()

const navItems =[
{
  name:"Home",
  slug :"/",
  active : true,

},
{
  name:"login",
  slug:"/login",
  active:!authStatus, 
},
{
  name:"Signup",
  slug:"/signup",
  active:!authStatus, 
},
{
  name:"All post ",
  slug:"/all post ",
  active:authStatus, 
},
{
  name:"Add post ",
  slug:"/add post ",
  active:authStatus, 
},

]
  return (
    <>

   <header className='py-3 shadow bg-slate-400'>
    <Container>
      <nav className='flex'>
        <div className=' mr-4'>
        <Link to='/'>
        <Logo width = '100px'/>
        </Link>
        </div>
         <ul className='flex ml-auto'>
          {navItems.map((item)=>(

              item.active? (
                <li key={item.name}> 
                <button onChange={()=>navigate(item.slug)}
                  className='inline-block px-6 py-2 duration-200 rounded-lg bg-blue-500 hover:bg-blue-600 text-white'> 
                  {item.name}
                </button>
                </li>
              ): null
             

          ))}
            {authStatus && ( <li>
              <Logoutbtn/>
            </li>
                  
                )}

         </ul>

      </nav>

    </Container>
   </header>
      
    </>
  )
}

export default Header
