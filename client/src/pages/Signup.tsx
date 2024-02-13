import { Link, useNavigate } from 'react-router-dom'
import bg from '../assets/bg.svg'
import { MdOutlineEmail } from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState  , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser  , reset} from '@/features/auth/authSlice';
import { AppDispatch , RootState } from '@/app/store';
import { toast } from 'react-toastify';





const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  

  
  const Navigate = useNavigate()

  const dispatch: AppDispatch = useDispatch();
  const {user , isLoading , isSuccess , message, isError } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message)
      return
    }
    if (isSuccess || user) {
      return Navigate('/')
    }

    dispatch(reset())
  }, [user , isError , isSuccess , message , Navigate , dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user)
    dispatch(signUpUser(formData));
    
  };


  
  return (
    
  
    <div className='flex flex-col md:flex-row gap-0 justify-start items-start w-full'>
        <div className='flex h-fit  w-full justify-center md:w-1/2 md:h-screen'>
            
            <img  className=" hidden md:flex w-full" src={bg} alt="background" />
            <h1 className='text-center text-3xl font-Gamja md:absolute md:top-2 md:left-4'>AuthFlow PRO</h1>
            </div>
        <div className='flex flex-col w-5/6 md:w-[40%] m-8 justify-center items-center md:justify-end gap-0'>
          <div className=" w-full flex justify-start flex-col mb-5">
            <h1 className=" mx-0 w-full mb-3 font-[Poppins] font-medium text-3xl">Sign Up</h1>
            <p className="font-[Poppins]  w-full font-normal ">If you already have an account register </p>
            <p className="font-[Poppins]  w-full font-normal ">You can <Link to="/sign-in" className="ml-2 text-orange-500 font-bold">Login Here !</Link></p>
         </div>
           
            <div className="font-[Poppins] block pl-2 justify-center w-full my-4">
              
              <label  htmlFor="">Email</label>
              <div className="w-full flex flex-row gap-2">
              <MdOutlineEmail />
            <Input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email adresse" />
              </div>
            </div>
            <div className="font-[Poppins] block pl-2 justify-center w-full my-4">
              <label htmlFor="">Username</label>
              <div className="w-full flex flex-row gap-2">
              <FaRegUser />
            <Input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" />
              </div>
            </div>
            <div className="font-[Poppins] block pl-2 justify-center w-full my-4">
              <label htmlFor="">Password</label>
              <div className="w-full flex flex-row gap-2">
              <RiLock2Line />
            <Input type="password" name="password"  value={formData.password} onChange={handleChange} placeholder="Enter your password"  />
              </div>
            </div>
            
            <Button variant="outline" disabled={isLoading} onClick={handleSubmit} size="lg" className="w-full mt-14 rounded-2xl bg-orange-500 text-white">{isLoading ? 'Loading...' : 'Register'}</Button>
          
            
        </div>
    </div>
  )
}

export default Signup