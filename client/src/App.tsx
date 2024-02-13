import { Routes , Route} from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Layout from './pages/Layout'
import Admin from './pages/Admin'
import Editor from './pages/Editor';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RequireAuth from './pages/RequireAuth'
import LinkPage from './pages/LinkPage'
import Unauthorized from './pages/Unauthorized'
import Lounge from './pages/Lounge'
import Missing from './pages/Missing'


function App() {
 

  return (
    <>
     <Routes>
        <Route path="/" element={<Layout/>}>  
         <Route path="sign-in" element={<Signin/>}/>
         <Route path="sign-up" element={<Signup/>}/> 
         <Route path="linkpage" element={<LinkPage/>}/>
         <Route path="unauthorized" element={<Unauthorized />} />

         <Route element={<RequireAuth allowedRoles={["user"]}/>}>
         <Route path="editor" element={<Editor/>}/>
         </Route>
         <Route element={<RequireAuth allowedRoles={["admin"]}/>}>
         <Route path="admin" element={<Admin/>}/>
         </Route>

         <Route element={<RequireAuth allowedRoles={["admin","user"]}/>}>
         <Route path="/" element={<Home/>}/>
         <Route path="lounge" element={<Lounge />} />
         </Route>

         <Route path="*" element={<Missing />} />
         </Route>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
