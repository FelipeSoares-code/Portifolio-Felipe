
import React from 'react';
import { Link } from 'react-router-dom';

export default function SessaoProj({id, titulo, img1, img2, imgDireita, paragrafo, link1, link2, txtLink1, txtLink2}) {
    const linkClasses = "no-underline text-white font-bold bg-[#1b41aa] px-5 py-2 rounded hover:underline";
    const imgClasses = "h-[500px] rounded-[20px] border-2 border-[#1e2939] shadow-lg";

    let direita, esquerda
    if (imgDireita) esquerda = "collapse"
    else direita = "collapse"

    return (
        <section id={id} className='text-white p-10'>
            <h1 className='text-center text-[25px] font-bold mb-7'>{titulo}</h1>
            <div className='flex flex-col gap-15 lg:flex-row justify-center'>
                {/* imagem na esquerda */}
                <div className={`${esquerda} flex flex-col items-center gap-8 md:flex-row justify-center`}>
                    <img className={imgClasses} src={img1} alt={`imagem demostrativa do ${id}`} />
                    <img className={imgClasses} src={img2} alt={`imagem demostrativa do ${id}`} />
                </div>
                <div className='lg:w-[45%]'>
                    <p>{paragrafo}</p>
                    <div className='flex flex-col w-[250px] md:w-[500px] md:flex-row gap-2 mt-5 lg:justify-start'>
                        <Link className="no-underline text-white font-bold bg-[#1b41aa] px-5 py-2 rounded hover:underline" href={link1}>{txtLink1}</Link>
                        <Link className="no-underline text-white font-bold bg-[#1b41aa] px-5 py-2 rounded hover:underline" href={link2}>{txtLink2}</Link>
                    </div>
                </div>
                {/* imagem na direita */}
                <div className={`collapse lg:${direita} flex flex-col items-center gap-8 md:flex-row justify-center`}>
                    <img className={imgClasses} src={img1} alt={`imagem demostrativa do ${id}`} />
                    <img className={imgClasses} src={img2} alt={`imagem demostrativa do ${id}`} />
                </div>
            </div>
        </section>
    )
}
            