import restartLogo from '../assets/restart_logo.png'
import bgHopeImage from '../assets/bg_hope_image.png'
import logoHope from '../assets/logo_hope.png'
import { Link } from 'react-router-dom'
import logoWebtoons from '../assets/logo_webtoons.png'
import logoTapas from '../assets/logo_tapas.png'


const Page404=()=>{

    return(
        <div className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHopeImage})` }}>
            
            <div className=" bg-gray-950 w-full h-12 flex justify-center align-middle drop-shadow-2xl">
                <img src={restartLogo} className=' h-10 my-auto mx-auto'/>
            </div>

            <div className='flex flex-col h-1/2 justify-center items-center px-5 py-5 gap-2'>
                <p className='text-7xl text-white text-center font-montserrat font-extrabold '>404</p>
                <p className='text-2xl text-white text-center font-montserrat font-bold'>This page does not exist (yet).</p>
                <p className='text-xl text-white text-center font-montserrat'>The resTart webpage is still under development. Thank you for your patience ^.^</p>


            </div>
            
        </div>
    )
}


export default Page404