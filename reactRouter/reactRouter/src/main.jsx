import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/contectUs/Contectus.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter(
// [{

// path:"/",
// element:<Layout/>,
// children:[

// {
// path:"",
// element: <Home/>

// },{

// path:"About",
// element:<About/>



// },{

//   path:"ContectUs",
//   element:<Contact/>
  
  
  
//   }


// ]

// }

// ]

// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='ContectUs' element={<Contact/>} />
      <Route path='user/:userId' element={<User />} />
      <Route path='Github' element={<Github/>} />
      
    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>


  </StrictMode>,
)
