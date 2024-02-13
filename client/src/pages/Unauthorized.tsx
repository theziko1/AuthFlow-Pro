import { useNavigate } from "react-router-dom"
import Header from "./Header";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <>
        <Header/>
        <section className="bg-orange-500 w-1/4 rounded-xl m-auto mt-11 font-[Inter] flex flex-col justify-center items-center p-4">
            <h1 className="text-white underline decoration decoration-white">Unauthorized</h1>
            <br />
            <p className="text-center">You do not have access to the requested page.</p>
            <div className="text-white underline p-4 decoration-white">
                <button onClick={goBack}>Go Back</button>
            </div>
        </section>
        </>
    )
}

export default Unauthorized