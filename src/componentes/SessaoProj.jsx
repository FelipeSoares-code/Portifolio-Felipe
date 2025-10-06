

export default function SessaoProj({id, titulo, img1, img2, paragrafo, link1, link2, txtLink1, txtLink2}) {
    const linkClasses = "no-underline text-white font-bold bg-[#1b41aa] px-5 py-2 rounded hover:underline";

    return (
        <section id={id} className='text-white p-10'>
            <h1 className='text-center text-[25px] font-bold mb-7'>{titulo}</h1>
            <div className='flex flex-col gap-15 lg:flex-row justify-center'>
                <div className={`flex flex-col items-center gap-8 md:flex-row justify-center rounded-[20px] border-2 border-[#1e2939] shadow-lg`}>
                    <img className='h-[500px]' src={img1} alt="imagem demostrativa do site" />
                    <img className='h-[500px]' src={img2} alt="imagem demostrativa do site" />
                </div>
                <div className='lg:w-[45%]'>
                    <p>{paragrafo}</p>
                    <div className='flex flex-col w-[250px] md:w-[500px] md:flex-row gap-2 mt-5 lg:justify-start'>
                        <Link className={linkClasses} to={link1}>{txtLink1}</Link>
                        <Link className={linkClasses} to={link2}>{txtLink2}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
            