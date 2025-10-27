import { Link } from 'react-router-dom';
import Card from '../componentes/Card';
import SessaoProj from '../componentes/SessaoProj';
import homeLemon from '../imagens/home-lemon.png'
import homeLemonWeb from '../imagens/home-lemon-web.png'
import homeGuincho from '../imagens/home-guincho.png'
import corpoGuincho from '../imagens/corpo-guincho.png'
import cardsClinica from '../imagens/cards-clinica.png'
import styles from '../estilos/Apresentacao.module.css'

export default function Apresentacao() {
    const linkLemonMobile = "https://github.com/Hebertz21/LemonCoinMobile/releases"
    
    const linkLemonWeb = "https://github.com/IntiGenovez/LemonCoin/releases"

    return (
        <div className={'flex flex-col gap-8 p-0 bg-[#030712] pb-10'}>
            {/*introdução GitHub e linkedin*/}
            <section className={`${styles.introducao} lg:flex-row md:flex-col`}>
                <div className='w-full flex flex-col gap-2'>
                    <h1>Felipe Soares</h1>
                    <h2>Desenvolvedor de Sites e Apps</h2>
                    <div className={'flex gap-4'}>
                        <Link className={styles.link} to="https://github.com/felipeSoares-code" target="_blank">
                            GitHub
                        </Link>
                        <Link className={styles.link} to="https://www.linkedin.com/in/felipe-soares-125132204/" target="_blank">
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
                <hr className='text-[#1e2939] m-10 mb-0' />
            </section>

            {/* LemonCoin */}
            <SessaoProj 
                id="LemonCoin"
                img={[homeLemon, homeLemonWeb]}
                imgDireita={0}
                estiloImg="h-[500px]"

                titulo="LemonCoin"
                paragrafo="O LemonCoin é em um aplicativo de gestão financeira disponivel para Web e Android. Pelo LemonCoin é possível registrar movimentações financeiras, vincular categorias a essas movimentações e exportar uma planilha personalizada com as movimentações registradas. O aplicativo é 100% conectado entre a versão web e mobile, com atualização em tempo real em caso de mudança de registro"

                link={[linkLemonMobile, linkLemonWeb]}
                txtLink={["Veja o LemonCoin Mobile", "Veja o LemonCoin Web"]}
            />
            <hr className='text-[#1e2939] m-10 mb-0' />

            {/* Guincho Cleiton */}
            <SessaoProj 
                id="GuinchoCleiton"
                img={[homeGuincho, corpoGuincho]}
                imgDireita={1}
                estiloImg="h-[500px]"

                titulo="CAS - Guincho Cleiton"
                paragrafo="Site desenvolvido para divulgação do serviço de guincho em São Bernardo do Campo. O site foi desenvolvido utilizando React, HTML, CSS e JavaScript. O site é responsivo, se adaptando a qualquer tamanho de tela, seja ele desktop ou mobile."

                link="https://guinchosbc.com.br"
                txtLink="Veja o site"
            />

            {/* site cuidando de mim */}
            <SessaoProj
                id="Cuidando-de-Mim"
                img={cardsClinica}
                estiloImg={"w-200"}

                titulo="Clinica - Cuidando de Mim"
                paragrafo="Site desenvolvido para a psicologa Rita Soares, para divulgação de seu trabalho com profissional. O site foi feito usando React"

                link={"/"}
                txtLink="Veja o Site"
            />
        </div>
    )
}