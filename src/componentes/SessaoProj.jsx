
import React from 'react';
import { Link } from 'react-router-dom';

export default function SessaoProj({id, titulo, img, estiloImg, imgDireita, paragrafo, link, txtLink}) {
    const linkClasses = "no-underline text-white font-bold bg-[#1b41aa] px-5 py-2 rounded hover:underline transition text-center";
    const imgClasses = `${estiloImg} rounded-[20px] border-2 border-[#1e2939] shadow-lg`
    imgDireita = (imgDireita == true) //garante que imgDireita seja booleano

    const imagens = (
        <div className="flex flex-col items-center gap-8 md:flex-row justify-center">
            {Array.isArray(img) && img.length > 0
                ? img.map((i, idx) => (
                    <img 
                        className={imgClasses} 
                        src={img[idx]} 
                        alt={`imagem demostrativa do ${id}`} 
                    />
                ))
                : (
                    <img 
                        className={imgClasses} 
                        src={img} 
                        alt={`imagem demostrativa do ${id}`} 
                    />
                )                            
            }
        </div>
    )

    const links = (
        Array.isArray(link) && link.length > 0
        ? 
            link.map((l, idx) => (
                <Link
                    key={idx}
                    className={linkClasses}
                    to={link[idx]}
                    target={"_blank"}
                >
                    {txtLink[idx]}
                </Link>
            ))
        : 
        (
            <Link className={linkClasses} to={link} target="_blank">
                {txtLink}
            </Link>
        )
    )

    return (
        <section id={id} className='text-white p-10'>
            <h1 className='text-center text-[25px] font-bold mb-7'>{titulo}</h1>
            <div className='flex flex-col gap-15 text-justify lg:text-left lg:flex-row justify-center'>
                {/* imagem na esquerda */}
                {!imgDireita && imagens}
                <div className='lg:w-[45%]'>
                    <p>{paragrafo}</p>
                    {link &&
                        <div className='flex flex-col w-[100%] md:w-[500px] md:flex-row gap-5 mt-5 lg:justify-start'>
                            {links}
                        </div>
                    }                    
                </div>
                {/* imagem na direita */}
                {imgDireita && imagens}
            </div>
            <hr className='text-[#1e2939] m-10 mb-0' />
        </section>
    )
}
            