import { Routes , Route} from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
 

  return (
    <>
     <Routes>
         <Route path="/" element={<Signup/>}/>
         <Route path="/sign-in" element={<Signin/>}/>
     </Routes>
    </>
  )
}

export default App
