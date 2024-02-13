import { Link } from "react-router-dom"
import Header from "./Header"

const LinkPage = () => {
    return (
        <>
        <Header/>
        <section className="bg-amber-500 font-[Inter] w-1/4 font-bold mx-auto mt-[70px] text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-black text-3xl">Links</h1>
            <br />
            <h2 className="text-blue-500 font-bold font-Gamja text-3xl">Public</h2>
            <br />
            <Link to="/sign-in">Login</Link>
            <Link to="/sign-up">Register</Link>
            <br />
            <h2 className="text-red-500 font-bold font-Gamja text-3xl">Private</h2>
            <br />
            <Link to="/">Home</Link>
            <Link to="/editor">Editors Page</Link>
            <Link to="/admin">Admin Page</Link>
        </section>
        </>
    )
}

export default LinkPage