                               
import './App.css'
import Login from './component/login'
import Profile from './component/profile'
import UserContextProvider from './context/Contextprovider'

function App() {

  return (
    <UserContextProvider>
<Login/>
<Profile/>
    </UserContextProvider>
  )
}

export default App
