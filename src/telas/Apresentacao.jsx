import { Link } from 'react-router-dom';
import Card from '../componentes/Card';
import styles from '../estilos/Apresentacao.module.css';

export default function Apresentacao() {
    return (
        <div className={'flex flex-col gap-8 p-0 bg-[#030712] pb-10'}>
            {/*introdução GitHub e linkedin*/}
            <section className={`${styles.introducao} lg:flex-row md:flex-col`}>
                <div className='w-full flex flex-col gap-2'>
                    <h1>Felipe Soares</h1>
                    <h2>Desenvolvedor de Sites e Apps</h2>
                    <div className={'flex gap-4'}>
                        <Link to="https://github.com/felipeSoares-code" target="_blank">
                            GitHub
                        </Link>
                        <Link to="https://www.linkedin.com/in/felipe-soares-125132204/" target="_blank">
                            LinkedIn
                        </Link>
                    </div>
                </div>
                <div className='text-center w-full md:flex md:justify-end'>
                    <p className='text-justify mr-10' style={{color: 'white'}}>
                        Olá! Meu nome é Felipe Soares, tenho 22 anos e sou um desenvolvedor de sites e aplicativos. Sou formado em Análise e Desenvolvimento de Sistemas e tenho experiência em diversas tecnologias, incluindo React, React Native, Node.js, HTML, CSS e JavaScript.
                        Apaixonado por tecnologia, estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades.
                    </p>
                </div>
            </section>

            {/*Projetos*/}
            <section>
                <h1 className='text-center text-white text-[25px] font-bold mb-8 mt-20'>Projeto Realizados</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5 px-5'>
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
        </div>
    )
}