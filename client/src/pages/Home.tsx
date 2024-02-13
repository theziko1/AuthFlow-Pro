import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import { useSelector, useDispatch } from 'react-redux'
import { logOutUser, reset } from '@/features/auth/authSlice'

const Home = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { user } = useSelector((state : any) => state.auth)

    const logout = async () => {
        dispatch(logOutUser() as any)
        dispatch(reset())
        navigate('/linkpage');
    }

    return (
      <>
      <Header/>
        <section className="bg-orange-500 w-1/4 rounded-xl m-auto mt-11 font-[Inter] flex flex-col justify-center items-center p-4">
            <h1 className="text-white p-2- text-4xl font-bold font-Gamja">Home</h1>
            <br />
            <p className="text-white p-2 rounded bg-green-500">You are logged in!</p>
            <br />
            <Link className="text-black underline decoration-black" to="/editor">Go to the Editor page</Link>
            <br />
            <Link className="text-black underline decoration-black" to="/admin">Go to the Admin page</Link>
            <br />
            <Link className="text-black underline decoration-black" to="/lounge">Go to the Lounge</Link>
            <br />
            <Link className="text-black underline decoration-black" to="/linkpage">Go to the link page</Link>
            { user && <div className="bg-red-500 text-white p-4 m-4 border border-black rounded-md">
                <button onClick={logout}>Sign Out</button> 
            </div>}
        </section>
        </>
    )
}

export default Home