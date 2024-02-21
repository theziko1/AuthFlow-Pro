import { Link } from "react-router-dom"
import Header from "./Header"

const Editor = () => {
    return (
        <>
        <Header/>
        <section className="bg-amber-500 w-1/4 rounded-xl m-auto mt-11 font-[Inter] flex flex-col justify-center items-center p-4">
            <h1 className="text-white underline decoration decoration-white">Editors Page</h1>
            <br />
            <p>You must have been assigned an Editor role.</p>
            <div className="text-white underline decoration decoration-white">
                <Link to="/">Home</Link>
            </div>
        </section>
        </>
    )
}

export default Editor