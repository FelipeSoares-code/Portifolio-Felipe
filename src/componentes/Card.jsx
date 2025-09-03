import { Link } from "react-router-dom"


export default function Card({link, titulo, p}) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h1>{titulo}</h1>
            <p>{p}</p>
            <Link to={link}>Ver Mais</Link>
        </div>
    )
}