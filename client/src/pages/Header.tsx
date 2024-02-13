import { FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOutUser, reset } from '@/features/auth/authSlice'
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
    <header className='bg-orange-500 w-full flex justify-around p-4'>
      <div className='text-white my-auto font-Gamja text-4xl font-bold'>
        <Link to='/'>AuthFlow PRO</Link>
      </div>
      <HoverCard>
        <HoverCardTrigger className="text-white flex justify-center items-center font-bold font-Gamja text-2xl cursor-pointer">Welcome {username} !</HoverCardTrigger>
        <HoverCardContent>
         Your rule is {rule}
        </HoverCardContent>
      </HoverCard>

      <ul className="flex flex-row gap-8 text-white justify-between">
        {user && (
          <li>
            <button className='btn' onClick={onLogout}>
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