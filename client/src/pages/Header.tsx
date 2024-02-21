import { FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOutUser, reset } from '@/features/auth/authSlice'
import logo from "../assets/logo-rbg.png"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state : any) => state.auth)

  const onLogout = () => {
    dispatch(logOutUser() as any)
    dispatch(reset())
   navigate('/sign-in') 
   
    
  }
  const name = localStorage.getItem('username')
   const username = JSON.parse(name as string)
   const ruleid = localStorage.getItem('role')
   const rule = JSON.parse(ruleid as string)
  // useEffect(() => {
    
  // }, [user])
  

  return (
    <header className='bg-amber-500 flex w-full justify-between items-center p-4'>
      <div className='text-white w-1/3 my-auto flex flex-row  gap-4 font-Gamja text-4xl font-bold'>
        <img src={logo} className='w-12 h-12' alt="logo" />
        <Link to='/'>AuthFlow PRO</Link>
      </div>
      <div className='w-1/3 flex justify-center'>
          <HoverCard>
          <HoverCardTrigger className="text-white flex justify-center items-center font-bold font-Gamja text-2xl cursor-pointer">Welcome {username} !</HoverCardTrigger>
          <HoverCardContent>
          Your rule is {rule}
          </HoverCardContent>
        </HoverCard>
      </div>
      <ul className="flex w-1/3 flex-row gap-8 text-white justify-end">
        {user && (
          <li >
            <button onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        )           
        }
      </ul>
    </header>
  )
}

export default Header