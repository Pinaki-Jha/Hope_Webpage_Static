import restartLogo from '../assets/restart_logo.png'
import bgHopeImage from '../assets/bg_hope_image.png'
import logoHope from '../assets/logo_hope.png'
import { Link } from 'react-router-dom'
import logoWebtoons from '../assets/logo_webtoons.png'
import logoTapas from '../assets/logo_tapas.png'


const ReadHope=()=>{

    return(
        <div className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHopeImage})` }}>
            
            <div className=" bg-gray-950 w-full h-12 flex justify-center align-middle drop-shadow-2xl">
                <img src={restartLogo} className=' h-10 my-auto mx-auto'/>
            </div>

            <div className='flex flex-col md:flex-row gap-5 p-10'>
                <div className='w-full md:w-1/2 drop-shadow-[0_0_5px_black]'>
                    <img src={logoHope} className='[text-shadow:_2px_2px_4px_rgb(0_0_0_/_90%)] drop-shadow-2xl'/>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-col gap-3 font-montserrat'>
                        <a href='https://www.webtoons.com/en/canvas/humanitys-hope/list?title_no=1089422' className='w-full h-12 mx-auto rounded-3xl bg-green-100 hover:bg-green-200 focus:bg-green-200  text-lg flex flex-row px-3 gap-5 items-center align-middle drop-shadow-[0_0_2px_black] hover:drop-shadow-[0_0_5px_black]'>
                            <div className='rounded-full h-10 w-10 bg-white flex justify-center items-center'>
                                <img src={logoWebtoons} className='h-8 w-8 '/>
                            </div>
                            <p className='my-auto font-montserrat'> Read on Webtoons</p>
                        </a>
                        <a href='https://tapas.io/series/humanitys-hope/info' className='w-full h-12 mx-auto rounded-3xl bg-amber-100 hover:bg-amber-200 focus:bg-amber-200 text-lg flex flex-row px-3 gap-5 items-center align-middle drop-shadow-[0_0_2px_black] hover:drop-shadow-[0_0_5px_black]'>
                            <div className='rounded-full h-10 w-10 bg-white flex justify-center items-center'>
                                <img src={logoTapas} className='h-8 w-8 '/>
                            </div>
                            <p className='my-auto font-montserrat'> Read on Tapas</p>
                        </a>
                        
                    </div>
                    <div className='font-montserrat font-semibold bg-white/70 rounded-lg px-5 py-5 my-5'>
                        <p>An Esper fighting against discrimination, Asha Agnihotri's life turns upside down when she has a premonition of her eminent demise in seven days.</p>
                        <br/>
                        <p>Amidst rising tensions between humans and demons, will she be able to navigate her way to survival?</p>
                        <br/>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ReadHope