import { Link } from 'react-router-dom';
import Card from '../componentes/Card';
import styles from '../estilos/Apresentacao.module.css';

export default function Apresentacao() {
    return (
        <div className={'flex flex-col gap-8 p-0 bg-[#030712]'}>
            {/*introdução GitHub e linkedin*/}
            <section className={`${styles.introducao}`}>
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
            </section>

            {/* sobre mim */}
            <section className='flex flex-col gap-4 p-8' style={{color: 'white'}}   >
                <h1 className='text-center'>Sobre Mim</h1>
                <p className='mx-20'>
                    Olá! Meu nome é Felipe Soares, tenho 19 anos e sou um desenvolvedor de sites e aplicativos.
                </p>
            </section>

            {/*Projetos*/}
            <section>
                <h1 className='text-center'>Projeto Realizados</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
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