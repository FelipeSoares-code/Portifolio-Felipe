import { Link } from 'react-router-dom';
import Card from '../componentes/Card';

export default function Apresentacao() {
    return (
        <>
            {/*introdução GitHub e linkedin*/}
            <section className="introducao flex flex-col">
                <h1>Felipe Soares</h1>
                <h2>Desenvolvedor de Sites e Apps</h2>
                <div className="flex gap-4">
                    <Link to="https://github.com/felipeSoares-code" target="_blank">
                        GitHub
                    </Link>
                    <Link to="https://www.linkedin.com/in/felipe-soares-125132204/" target="_blank">
                        LinkedIn
                    </Link>
                </div>
            </section>

            {/*Projetos*/}
            <section>
                <h1 className='text-center'>Projeto Realizados</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
                    <Card
                        titulo="LemonCoin" 
                        p="LemonCoin é um aplicativo de gestão financeira para Android e Web" 
                        link="/lemoncoin"
                    />
                    <Card
                        titulo="CAS - Guincho Cleiton" 
                        p="Site para divulgação de serviço de guincho em São Bernardo do Campo" 
                        link="https://guinchosbc.com.br"
                    />
                    <Card
                        titulo="Rita Soares Psicologa" 
                        p="Site feito para divulgação da clínica de uma Psicologa em São Bernardo do Campo" 
                        link="https://ritasoarespsicologa.com.br"
                    />
                </div>
            </section>
        </>
    )
}