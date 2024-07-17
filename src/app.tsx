import logo from './assets/images/logo.svg'
import logoAzul from './assets/images/logoAzul.svg'
import banner from './assets/images/banner.svg'
//IMAGENS SECTION 4
import titleClientes from './assets/images/SectionFour/nossosClientes.svg'
import giolaser from "./assets/images/SectionFour/giolaser.webp";
import sorridents from "./assets/images/SectionFour/sorridents.webp";
import draElisangela from "./assets/images/SectionFour/draElisangela.webp";
import draRenata from "./assets/images/SectionFour/draRenata.webp";
import mid from "./assets/images/SectionFour/mid.webp";
import olharCerto from "./assets/images/SectionFour/olharCerto.webp";
import ComponentCarrouselClientes from './assets/components/carrouselClientes';
import CarrouselMarketing from './assets/components/carrouselMarketing';

import corsiva from './assets/images/corsiva.png'

import saudeMarketingSucesso from './assets/images/saudeMarketingSucesso.svg'

//INFOS CARDS SECTION4
const info = [
    {
      img: giolaser,
      title: "GiO 10 anos!",
      link: 'https://bmouseproductions.com/view/atendimento/case/gio-estetica-avancada/'
    },
    {
      img: sorridents,
      title: "Sorridents",
      link: 'https://bmouseproductions.com/view/atendimento/case/sorridents/'
    },
    {
      img: draElisangela,
      title: "Dra. Elisângela",
      link: 'https://bmouseproductions.com/view/atendimento/case/dra-elisangela-menezes/'
    },
    {
      img: draRenata,
      title: "Dra. Renata",
      link: 'https://bmouseproductions.com/view/atendimento/case/dra-renata-caldeira/'
    },
    {
      img: mid,
      title: "Medic Imagens Diagnósticos",
      link: 'https://bmouseproductions.com/view/atendimento/case/medic-imagem-diagnosticos/'
    },
    {
      img: olharCerto,
      title: "Olhar Certo",
      link: 'https://bmouseproductions.com/view/atendimento/case/olhar-certo/'
    },
];


export default function Home() {

    function backToTop() {
       window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
                {/* BANNER */}
                <div className='container mx-auto' >
                    <header className=' w-full px-5 py-5 flex justify-between items-center'>
                        <img 
                            src={logo} 
                            alt="logo empresa Bmouse" 
                            className='w-full max-w-[200px] '
                        />

                        <a 
                            href='https://api.whatsapp.com/send/?phone=55349993067766&text=Ol%C3%A1%2C+vim+pela+landig+page+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7oes+da+Bmouse+Productions.'
                            className='px-5 py-3 w-fit hidden md:flex items-center justify-center gap-3 text-[#00295b] bg-[#0fff94] hover:bg-white  rounded-3xl transition-all'
                        >
                            Entre em contato 

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </header>
                    
                    <div className='bg-white pt-10' >
                        <div className='flex flex-col items-center space-y-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                            <img 
                                src={logoAzul} 
                                alt="" 
                                className='w-full max-w-[100px] lg:'
                            />

                            <div className='px-2 text-center space-y-3 max-w-6xl'>
                                <h2 className='font-franieLight text-sm md:text-base lg:text-lg text-[#00295b] '>
                                    Você é um profissional da saúde que deseja <strong className='w-full font-franieSemiBold'>impulsionar sua carreira a novos patamares,</strong> mas não sabe como?
                                </h2>

                                <h1 className='font-franiExtraBold text-lg md:text-3xl xl:text-4xl text-[#004ebf] leading-7 xl:leading-[60px] '>
                                    A BMouse Productions é uma agência de criatividade <span className='px-1 py-1 text-white bg-[#00295b]'>especializada em marketing,</span> que pode te ajudar a alcançar seus objetivos comerciais.
                                </h1>
                            </div>

                        </div>

                        <img 
                            src={banner} 
                            alt="banner do site bmouse productions" 
                            className='w-full'
                        />
                    </div>
                </div>
                <a 
                    href='https://api.whatsapp.com/send/?phone=55349993067766&text=Ol%C3%A1%2C+vim+pela+landig+page+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7oes+da+Bmouse+Productions.'
                    className='px-5 py-3 mt-5 mx-auto w-fit flex md:hidden items-center justify-center gap-3 text-[#00295b] bg-[#0fff94] hover:bg-white  rounded-3xl transition-all animate-bounce'
                >
                    Entre em contato 

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </a>


                {/* SECTION 1 */}
                <section className='container my-14 px-5 lg:px-10 xl:px-20 mx-auto text-white' >
                    <div className='mx-auto w-full md:w-[90%] xl:w-[80%] flex flex-col items-center' data-aos="flip-left" data-aos-duration="3000">
                        <h3 className='px-3 pb-2 pt-2.5 w-fit border border-white rounded-3xl xl:text-lg uppercase text-center font-franieLight'>
                            sobre nós
                        </h3>

                        <h2 className='mt-10 text-2xl md:text-5xl xl:text-6xl text-center font-franieLight'>
                            A <span className='text-[#0fff94] font-franieSemiBold'>BMouse</span> é muito mais do que uma agência de <span className='text-[#0fff94] font-franieSemiBold'>marketing</span> 
                        </h2>

                        <div className='mt-5 md:mt-10 space-y-4 '>
                            <p className='text-center lg:text-lg font-franieLight'>
                                Somos uma agência de criatividade com um compromisso inabalável em levar a sua marca a
                                novos patamares.
                            </p>

                            <p className='text-center lg:text-lg font-franieLight'>
                                O nosso diferencial? Possuímos o Studio BMouse. um espaço equipado com tecnologia de
                                ponta. garantindo que cada conteúdo audiovisual produzido atenda aos mais altos padrões de
                                qualidade.
                            </p>

                            <p className='text-center lg:text-lg font-franieLight'>
                                Conte com a BMouse para fazer a diferença no mercado.
                            </p>
                        </div>

                        <a 
                            href="https://api.whatsapp.com/send/?phone=55349993067766&text=Ol%C3%A1%2C+vim+pela+landig+page+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7oes+da+Bmouse+Productions." 
                            target="_blank"
                            className='my-10 flex items-center gap-3 lg:text-lg font-franieLight uppercase border-b hover:border-none transition-all '
                        >
                            saiba mais

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </section>
                <div className='max-w-[1536px] w-full mx-auto py-20 bg-gradient-to-b from-[#004ebf] to-60% to-[#00295b] '>
                    <CarrouselMarketing />
                    <div className='mt-20 px-5 lg:px-10 xl:px-20 flex justify-between items-center text-white'>
                        <img 
                            src={corsiva}
                            alt="bmouse productions" 
                            className='w-[150px] md:w-[250px] xl:w-[350px] '
                        />

                        <a 
                            href="https://api.whatsapp.com/send/?phone=55349993067766&text=Ol%C3%A1%2C+vim+pela+landig+page+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7oes+da+Bmouse+Productions." 
                            target="_blank"
                            className='my-10 flex items-center gap-3 lg:text-lg font-franieLight uppercase border-b hover:border-none transition-all '
                        >
                            saiba mais

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>


                {/* SECTION 2 */}
                <section className=' bg-white text-[#00295b] '>
                    <div className='container py-14 px-5 lg:px-10 xl:px-20 mx-auto flex flex-col gap-10'>
                        <h3 className='px-3 pb-2 pt-2.5 w-fit border border-[#00295b] rounded-3xl xl:text-lg uppercase text-center font-franieLight'>
                            sobre nós
                        </h3>

                        <div className='flex flex-col md:flex-row items-center md:justify-between md:gap-10'>
                            <img 
                                src={saudeMarketingSucesso} 
                                alt="titulo: Sáude + marketing = sucesso" 
                                className='md:max-w-96 lg:max-w-none '
                                data-aos="fade-up-right"
                                data-aos-duration="3000"
                            />

                            <p className='max-w-[500px] lg:text-lg font-franieLight' data-aos="fade-up-left" data-aos-duration="3000">
                                A BMOuse tem a SOIuçáO ideal para você aumentar a quantidade ao
                                consultas, na mesma proporção que aumenta o valor cobrado por elas, e
                                vamos re explicar como.
                            </p>
                        </div>

                        <div className='grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 md:space-y-10'>
                            <div className=' w-full flex flex-col items-center md:mt-10'>
                                <div className='w-fit p-8 border border-[#00295b] rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                    </svg>
                                </div>

                                <h3 className='text-center'>
                                    Planejamento e <br /> performance
                                </h3>
                            </div>

                            <div className=' w-full flex flex-col items-center' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="300">
                                <div className='w-fit p-8 border border-[#00295b] rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>

                                <h3 className='text-center'>
                                    Consultoria de <br />  
                                    mídia e imprensa
                                </h3>
                            </div>

                            <div className=' w-full flex flex-col items-center' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="400">
                                <div className='w-fit p-8 border border-[#00295b] rounded-full'>
                                    <svg viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-12'>
                                        <path d="M22.0735 26.9653C22.9589 26.3698 23.5993 25.971 23.0228 24.2407C22.4463 22.5105 22.0052 20.9884 20.6131 23.0923C18.5692 26.1832 22.5846 32.0167 26.35 35.3281C30.1154 38.6394 36.4569 41.9138 39.2252 39.46C41.1095 37.7889 39.5518 37.5533 37.7711 37.2106C35.9904 36.8678 35.6837 37.5602 35.2164 38.5233M52.5 30.9999C52.5 43.5083 42.4264 53.6484 30 53.6484C25.9018 53.6484 22.0595 52.5454 18.75 50.6184L7.5 53.6484L10.9339 43.0314C8.75823 39.5455 7.5 35.4206 7.5 30.9999C7.5 18.4915 17.5736 8.35144 30 8.35144C42.4264 8.35144 52.5 18.4915 52.5 30.9999Z" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>

                                <h3 className='text-center'>
                                    Endomarketing <br /> especializado
                                </h3>
                            </div>

                            <div className=' w-full flex flex-col items-center' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500">
                                <div className='w-fit p-8 border border-[#00295b] rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                    </svg>
                                </div>

                                <h3 className='text-center'>
                                    Planejamento de <br /> campanha de marketing
                                </h3>
                            </div>

                            <div className=' w-full flex flex-col items-center' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="600">
                                <div className='w-fit p-8 border border-[#00295b] rounded-full'>
                                    <svg viewBox="0 0 76 67" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-14'>
                                        <path d="M62.5 24.6796L36.25 10L10 24.6796L18.75 29.5727M62.5 24.6796L53.75 29.5727M62.5 24.6796L64.3158 25.5935C64.9908 25.9332 65.4167 26.6243 65.4167 27.3799V45.2305M18.75 29.5727L36.25 39.3591L53.75 29.5727M18.75 29.5727V47.1882L36.25 56.9746L53.75 47.1882V29.5727" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>

                                <h3 className='text-center'>
                                    Treinamento para <br /> profissionais
                                </h3>
                            </div>

                            <div className=' w-full flex flex-col items-center' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="700">
                                <div className='w-fit p-8 border border-[#00295b] rounded-full'>
                                    <svg viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-12'>
                                        <path d="M41.625 18.2988H41.65M20 50.8299H40C45.5228 50.8299 50 46.2785 50 40.6639V20.332C50 14.7175 45.5228 10.166 40 10.166H20C14.4772 10.166 10 14.7175 10 20.332V40.6639C10 46.2785 14.4772 50.8299 20 50.8299ZM39.375 30.498C39.375 35.7616 35.1777 40.0286 30 40.0286C24.8223 40.0286 20.625 35.7616 20.625 30.498C20.625 25.2344 24.8223 20.9674 30 20.9674C35.1777 20.9674 39.375 25.2344 39.375 30.498Z" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>

                                <h3 className='text-center'>
                                    Criação para <br />
                                    redes sociais
                                </h3>
                            </div>

                            <div className=' w-full flex flex-col items-center' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="800">
                                <div className='w-fit p-8 border border-[#00295b] rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>

                                <h3 className='text-center'>
                                    Rebrading da marca, <br />
                                    ou clínica
                                </h3>
                            </div>

                            <div className=' w-full flex flex-col items-center' data-aos="flip-left" data-aos-duration="1500" data-aos-delay="900">
                                <div className='w-fit p-8 border border-[#00295b] rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>

                                <h3 className='text-center'>
                                    Treinamento para <br /> profissionais
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>


                {/* SECTION 4 */}
                <section className="container mt-24 mb-14 px-5 lg:px-10 xl:px-20 mx-auto ">
                    <div className="flex flex-col  items-center justify-center gap-5 text-white">
                        <img 
                            src={logo} 
                            alt="logo da empresa Bmouse Productions" 
                            className='w-[100px] md:w-full md:max-w-[200px] '
                        />
                        <img 
                            src={titleClientes} 
                            alt="imagem com o titulo nossos clientes" 
                            className="sm:max-w-[500px] lg:max-w-none"
                        />
                    </div>

                    <ComponentCarrouselClientes />
                    
                    <div className="flex flex-col gap-14 lg:gap-20 ">
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {info.map((item, index) => {
                                return (
                                    <a
                                        className="relative w-full grayscale hover:grayscale-0 shadow-card rounded-[35px] overflow-hidden transition-all card-empresa"
                                        key={index}
                                        href={item.link}
                                    >
                                        <img className='block w-full transition-all' src={item.img} alt="" />
                                        <div className="px-10 w-full  h-[100px] xl:h-[120px] hidden absolute bottom-0 efeito-vidro lg:flex items-center justify-between gap-5 xl:gap-7 ">
                                            <div className="flex flex-col gap-2 xl:gap-3">
                                                {" "}
                                                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                                            </div>
                                            <div>
                                                <div
                                                    className="!h-[50px] flex items-center justify-center !w-[50px] rounded-full border border-white button-card transition-all"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                                        <path strokeLinecap="round" className='text-white' strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div> 
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    
                    <a 
                        href="https://api.whatsapp.com/send/?phone=55349993067766&text=Ol%C3%A1%2C+vim+pela+landig+page+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7oes+da+Bmouse+Productions." 
                        target="_blank"
                        className='mt-16 mb-10 mx-auto w-fit flex items-center gap-3 lg:text-lg font-franieLight text-white uppercase border-b hover:border-none transition-all '
                    >
                        saiba mais

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                    
                </section>


                <footer className='container py-14 px-5 lg:px-10 xl:px-20 mx-auto  text-white'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:justify-evenly'>
                        <p>
                            Somos a maior agência de marketing médico do Brasil. Faça parte dessa revolução
                            na área da saúde.
                        </p>

                        <div className='flex flex-col gap-2 overflow-clip'>
                            <span className='text-xl xl:text-2xl font-franieSemiBold'>
                                Fale Conosco
                            </span>

                            <a 
                                href="tel:+5534999306776"
                                className="font-franieLight"
                            >
                                (34) 99930-6776
                            </a>

                            <a 
                                href="mailto:info@bmouseproductions.com"
                                
                            >
                                <p className="font-franieLight w-full box-border flex text-wrap">
                                   info@bmouseproductions.com 
                                </p>
                            </a>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <span className='text-xl xl:text-2xl font-franieSemiBold'>
                                Endereço
                            </span>

                            <a 
                                href="tel:+5534999306776"
                                className="font-franieLight"
                            >
                                R. Dr. José Olímpio Borges, 134 - Vila Santa Luzia, Patos de Minas - MG, 38700-080
                            </a>
                        </div>
                    </div>
                    <div className='mt-[80px] '>
                        <img src={logo} alt="logo da empresa bmouse" className='mx-auto' />
                        <div className='mt-7 flex justify-center items-center'>
                            <a 
                                href="https://www.facebook.com/bmouseproductions/"
                                target='_blank'
                            >
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#004EBD"/>
                                    <path d="M32.3984 29.75H29.4688V38.5H25.5625V29.75H22.3594V26.1562H25.5625V23.3828C25.5625 20.2578 27.4375 18.5 30.2891 18.5C31.6562 18.5 33.1016 18.7734 33.1016 18.7734V21.8594H31.5C29.9375 21.8594 29.4688 22.7969 29.4688 23.8125V26.1562H32.9453L32.3984 29.75Z" fill="white"/>
                                </svg>
                            </a>

                            <a 
                                href="https://www.instagram.com/bmouseproductions/"
                                target='_blank'
                            >
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#004EBD"/>
                                    <path d="M27.75 24.0078C30.2109 24.0078 32.2422 26.0391 32.2422 28.5C32.2422 31 30.2109 32.9922 27.75 32.9922C25.25 32.9922 23.2578 31 23.2578 28.5C23.2578 26.0391 25.25 24.0078 27.75 24.0078ZM27.75 31.4297C29.3516 31.4297 30.6406 30.1406 30.6406 28.5C30.6406 26.8984 29.3516 25.6094 27.75 25.6094C26.1094 25.6094 24.8203 26.8984 24.8203 28.5C24.8203 30.1406 26.1484 31.4297 27.75 31.4297ZM33.4531 23.8516C33.4531 23.2656 32.9844 22.7969 32.3984 22.7969C31.8125 22.7969 31.3438 23.2656 31.3438 23.8516C31.3438 24.4375 31.8125 24.9062 32.3984 24.9062C32.9844 24.9062 33.4531 24.4375 33.4531 23.8516ZM36.4219 24.9062C36.5 26.3516 36.5 30.6875 36.4219 32.1328C36.3438 33.5391 36.0312 34.75 35.0156 35.8047C34 36.8203 32.75 37.1328 31.3438 37.2109C29.8984 37.2891 25.5625 37.2891 24.1172 37.2109C22.7109 37.1328 21.5 36.8203 20.4453 35.8047C19.4297 34.75 19.1172 33.5391 19.0391 32.1328C18.9609 30.6875 18.9609 26.3516 19.0391 24.9062C19.1172 23.5 19.4297 22.25 20.4453 21.2344C21.5 20.2188 22.7109 19.9062 24.1172 19.8281C25.5625 19.75 29.8984 19.75 31.3438 19.8281C32.75 19.9062 34 20.2188 35.0156 21.2344C36.0312 22.25 36.3438 23.5 36.4219 24.9062ZM34.5469 33.6562C35.0156 32.5234 34.8984 29.7891 34.8984 28.5C34.8984 27.25 35.0156 24.5156 34.5469 23.3438C34.2344 22.6016 33.6484 21.9766 32.9062 21.7031C31.7344 21.2344 29 21.3516 27.75 21.3516C26.4609 21.3516 23.7266 21.2344 22.5938 21.7031C21.8125 22.0156 21.2266 22.6016 20.9141 23.3438C20.4453 24.5156 20.5625 27.25 20.5625 28.5C20.5625 29.7891 20.4453 32.5234 20.9141 33.6562C21.2266 34.4375 21.8125 35.0234 22.5938 35.3359C23.7266 35.8047 26.4609 35.6875 27.75 35.6875C29 35.6875 31.7344 35.8047 32.9062 35.3359C33.6484 35.0234 34.2734 34.4375 34.5469 33.6562Z" fill="white"/>
                                </svg>

                            </a>

                            <a 
                                href="https://www.linkedin.com/company/bmouse/"
                                target='_blank'
                                className='w-14 flex justify-center '
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" fill="#fff "viewBox="0 0 30 30">
                                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                </svg>
                            </a>

                            <a 
                                href="https://www.youtube.com/@bmouseproductions_"
                                target='_blank'
                            >
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#004EBD"/>
                                    <path d="M37.9453 23.3828C38.4141 25.0234 38.4141 28.5391 38.4141 28.5391C38.4141 28.5391 38.4141 32.0156 37.9453 33.6953C37.7109 34.6328 36.9688 35.3359 36.0703 35.5703C34.3906 36 27.75 36 27.75 36C27.75 36 21.0703 36 19.3906 35.5703C18.4922 35.3359 17.75 34.6328 17.5156 33.6953C17.0469 32.0156 17.0469 28.5391 17.0469 28.5391C17.0469 28.5391 17.0469 25.0234 17.5156 23.3828C17.75 22.4453 18.4922 21.7031 19.3906 21.4688C21.0703 21 27.75 21 27.75 21C27.75 21 34.3906 21 36.0703 21.4688C36.9688 21.7031 37.7109 22.4453 37.9453 23.3828ZM25.5625 31.7031L31.1094 28.5391L25.5625 25.375V31.7031Z" fill="white"/>
                                </svg>
                            </a>
                        </div>

                        <div className='mt-[50px] flex flex-col md:flex-row justify-between'>
                            <p className='text-center'>Copyright © 2024 BMouse Productions</p>

                            <button
                                onClick={backToTop}
                                className='uppercase mt-10 md:mt-0'
                            >
                                voltar ao topo
                            </button>
                        </div>
                    </div>
                </footer>
        </>
    )
}