import { Routes , Route} from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

import Home from './pages/Home';

function App() {
 

  return (
    <>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/sign-up" element={<Signup/>}/>
         <Route path="/sign-in" element={<Signin/>}/>
         
     </Routes>
    </>
  )
}

export default App
