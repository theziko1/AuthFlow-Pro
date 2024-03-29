import { Link, useNavigate , useLocation } from 'react-router-dom'
import bg from '../assets/bg.svg'
import { RiLock2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser , reset } from '@/features/auth/authSlice';
import { AppDispatch, RootState } from '@/app/store';
import { toast } from 'react-toastify';


const Signin = () => {
 
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  

  const Navigate = useNavigate()
  const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  const dispatch: AppDispatch = useDispatch();
  const { user, message , isSuccess ,isLoading, isError } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      Navigate(from, { replace: true });
    }

    dispatch(reset())
  }, [user , isError , isSuccess , message , Navigate , dispatch])

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    dispatch(loginUser({username ,password}));
   
  };
  

  

  return (
    <div className='flex flex-col md:flex-row gap-0 justify-start items-start w-full'>
        <div className='flex h-fit  w-full justify-center md:w-1/2 md:h-screen'>
            
            <img  className=" hidden md:flex w-full" src={bg} alt="background" />
            <h1 className='text-center text-3xl font-Gamja md:absolute md:top-2 md:left-4'>AuthFlow PRO</h1>
            </div>
        <div className='flex flex-col w-5/6 md:w-[40%] m-12 justify-center items-center md:justify-end'>
          <div className=" w-full flex justify-start flex-col mb-5">
            <h1 className=" mx-0 w-full mb-3 font-[Poppins] font-medium text-3xl">Sign In</h1>
            <p className="font-[Poppins]  w-full font-normal ">If you don’t have an account register </p>
            <p className="font-[Poppins]  w-full font-normal ">You can <Link to="/sign-up" className="ml-2 text-orange-500 font-bold">Register Here !</Link></p>
         </div>
            
            
            <div className="font-[Poppins] block pl-2 justify-center w-full my-4">
              <label htmlFor="">Username</label>
              <div className="w-full flex flex-row gap-2">
              <FaRegUser />
            <Input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
              </div>
            </div>
            <div className="font-[Poppins] block pl-2 justify-center w-full my-4">
              <label htmlFor="">Password</label>
              <div className="w-full flex flex-row gap-2">
              <RiLock2Line />
            <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"  />
              </div>
            </div>
            <Button variant="outline" disabled={isLoading} onClick={handleSubmit} size="lg" className="w-full mt-14 rounded-2xl bg-orange-500 text-white">{isLoading ? 'Loading...' : 'Login'}</Button>
            
        </div>
    </div>
  )
}

export default Signin