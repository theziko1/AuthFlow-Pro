import { Link } from "react-router-dom"
import Header from "./Header"

const Lounge = () => {
    return (
        <>
        <Header/>
        <section className="bg-orange-500 w-1/4 rounded-xl m-auto mt-11 font-[Inter] flex flex-col justify-center items-center p-4">
            <h1 className="text-white underline decoration decoration-white">The Lounge</h1>
            <br />
            <p>Admins and Editors can hang out here.</p>
            <div className="text-white underline decoration decoration-white">
                <Link to="/">Home</Link>
            </div>
        </section>
        </>
    )
}

export default Lounge