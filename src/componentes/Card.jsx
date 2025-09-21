import { Link } from "react-router-dom"


export default function Card({link, titulo, p}) {
    return (
        <div className="flex flex-col gap-2 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" style={{backgroundColor: '#1e2939', color: 'white'}}>
            <h1 className="font-bold">{titulo}</h1>
            <p>{p}</p>
            <div className="flex justify-center">
                <Link to={link} className="bg-[#030e2d] p-3 rounded-sm m-3 w-30 font-bold hover:bg-[#1b41aa]">
                    Ver Mais
                </Link>
            </div>
        </div>
    )
}