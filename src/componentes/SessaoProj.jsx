
import React from 'react';
import { Link } from 'react-router-dom';

export default function SessaoProj({id, titulo, img1, img2, imgDireita, paragrafo, link, txtLink}) {
    const linkClasses = "no-underline text-white font-bold bg-[#1b41aa] px-5 py-2 rounded hover:underline";
    const imgClasses = "h-[500px] rounded-[20px] border-2 border-[#1e2939] shadow-lg";
    imgDireita = (imgDireita == true) //garante que imgDireita seja booleano

    return (
        <section id={id} className='text-white p-10'>
            <h1 className='text-center text-[25px] font-bold mb-7'>{titulo}</h1>
            <div className='flex flex-col gap-15 lg:flex-row justify-center'>
                {/* imagem na esquerda */}
                {!imgDireita && (
                    <div className="flex flex-col items-center gap-8 md:flex-row justify-center">
                        <img className={imgClasses} src={img1} alt={`imagem demostrativa do ${id}`} />
                        <img className={imgClasses} src={img2} alt={`imagem demostrativa do ${id}`} />
                    </div>
                )}
                <div className='lg:w-[45%]'>
                    <p>{paragrafo}</p>
                    <div className='flex flex-col w-[250px] md:w-[500px] md:flex-row gap-2 mt-5 lg:justify-start'>
                        {Array.isArray(link) && link.length > 0
                            ? link.map((l, idx) => (
                                    <Link
                                        key={idx}
                                        className={linkClasses}
                                        to={link[idx]}
                                        target={"_blank"}
                                    >
                                        {txtLink[idx]}
                                    </Link>
                                ))
                            : (
                                    <Link className={linkClasses} to={link} target="_blank">
                                        {txtLink}
                                    </Link>
                                )
                        }
                    </div>
                </div>
                {/* imagem na direita */}
                {imgDireita && (
                    <div className="flex flex-col items-center gap-8 md:flex-row justify-center">
                        <img className={imgClasses} src={img1} alt={`imagem demostrativa do ${id}`} />
                        <img className={imgClasses} src={img2} alt={`imagem demostrativa do ${id}`} />
                    </div>
                )}
            </div>
        </section>
    )
}
            