import { Link } from 'react-router-dom'
import bg from '../assets/bg.svg'
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@/components/ui/button"





const Signup = () => {
  return (
    <div className='flex flex-col md:flex-row gap-0 justify-start items-start w-full'>
        <div className='flex h-5  w-full justify-center md:w-1/2 md:h-screen'>
            
            <img  className=" hidden md:flex w-full" src={bg} alt="background" />
            <h1 className='text-center text-3xl font-Gamja md:absolute md:top-2 md:left-4'>AuthFlow PRO</h1>
            </div>
        <div className='flex flex-col w-full md:w-[40%] m-8 items-center justify-end gap-0'>
          <div className=" w-full flex justify-start flex-col mb-5">
            <h1 className=" mx-0 w-full mb-3 font-[Poppins] font-medium text-3xl">Sign Up</h1>
            <p className="font-[Poppins]  w-full font-normal ">If you don’t have an account register </p>
            <p className="font-[Poppins]  w-full font-normal ">You can <Link to="" className="ml-2 text-orange-500 font-bold">Login Here !</Link></p>
         </div>
            
            <div className="font-[Poppins] block pl-2 justify-center w-full my-4">
              <label htmlFor="">Email</label>
              <div className="w-full flex flex-row gap-2">
              <MdOutlineEmail />
            <input type="text" value="" placeholder='Enter your email adresse' className="w-full border-b-2 focus:border-orange-500 outline-none" />
              </div>
            </div>
            <div className="font-[Poppins] block pl-2 justify-center w-full my-4">
              <label htmlFor="">Username</label>
              <div className="w-full flex flex-row gap-2">
              <FaRegUser />
            <input type="text" value="" placeholder='Enter your username' className="w-full border-b-2 focus:border-orange-500 outline-none" />
              </div>
            </div>
            <div className="font-[Poppins] block pl-2 justify-center w-full my-4">
              <label htmlFor="">Password</label>
              <div className="w-full flex flex-row gap-2">
              <CiLock />
            <input type="password" value="" placeholder='Enter your password' className="w-full border-b-2 focus:border-orange-500 outline-none" />
              </div>
            </div>
            <Button variant="outline" size="lg" className="w-full mt-14 rounded-2xl bg-orange-500 text-white">Register</Button>

        </div>
    </div>
  )
}

export default Signup