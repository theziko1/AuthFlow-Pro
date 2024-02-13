import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article className="bg-amber-500 w-1/4 rounded-xl m-auto mt-11 font-[Inter] flex flex-col justify-center items-center p-4">
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div className="text-white underline decoration-wavy decoration-white">
                <Link to="/">Visit Our Homepage</Link>
            </div>
        </article>
    )
}

export default Missing