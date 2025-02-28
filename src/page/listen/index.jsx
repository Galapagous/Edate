import { useState } from 'react'
import Listen from '../../assets/listener/head.jpeg'
import Listen2 from '../../assets/listener/head1.jpeg'
import Talk from '../../assets/listener/talk.jpeg'
import Talk2 from '../../assets/listener/talk1.jpeg'
import { useNavigate } from 'react-router-dom'

const ListenOnboarding = () => {
    const [changeListener, setChangeListener] = useState(false)
    const [changeSpeaker, setChangeSpeaker] = useState(false)
    const navigate = useNavigate()
    const year = new Date().getFullYear()

    return (
        <div className="w-screen h-screen bg-background_primary p-10">
            <div className="w-full flex items-center justify-center gap-5">
                <div className="border-2 p-2 border-main_600 rounded-md">
                    <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0625 0.5C5.36707 0.5 0.75 5.11709 0.75 10.8125C0.75 21.125 12.9375 30.5 19.5 32.6808C26.0625 30.5 38.25 21.125 38.25 10.8125C38.25 5.11709 33.6329 0.5 27.9375 0.5C24.4497 0.5 21.3663 2.23147 19.5 4.88169C17.6337 2.23147 14.5503 0.5 11.0625 0.5Z" fill="#195290"/>
                    </svg>
                </div>
                <h1 className="flex items-center justify-center text-2xl font-semibold">
                    <span className="text-red-500">E</span> - Companion
                </h1>
            </div>

            <div className='flex items-center justify-center gap-5 mt-20'>
                {/* Listener Section */}
                <div 
                    onMouseEnter={() => setChangeListener(true)} 
                    onMouseLeave={() => setChangeListener(false)} 
                    onClick={()=>{navigate('/listen/12345')}}
                    className='cursor-pointer w-[200px] h-[250px] text-center relative overflow-hidden rounded-md'
                >
                    {/* Background Image */}
                    <img 
                        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${changeListener ? 'opacity-0' : 'opacity-100'}`} 
                        src={Listen2} 
                        alt="Listener Default"
                    />
                    {/* Hover Image */}
                    <img 
                        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${changeListener ? 'opacity-100' : 'opacity-0'}`} 
                        src={Listen} 
                        alt="Listener Hover"
                    />
                    <div className={changeListener ? 'text-white' : ''}>
                        <h1 className='mt-2 text-lg font-semibold relative z-10'>Listener</h1>
                        <p className='relative z-10'>Listen to people</p>
                    </div>
                </div>

                {/* Speaker Section */}
                <div 
                    onMouseEnter={() => setChangeSpeaker(true)} 
                    onMouseLeave={() => setChangeSpeaker(false)}
                    onClick={()=>{navigate('/speak/12345')}}
                    className='cursor-pointer w-[200px] h-[250px] text-center relative overflow-hidden rounded-md'
                >
                    {/* Background Image */}
                    <img 
                        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${changeSpeaker ? 'opacity-0' : 'opacity-100'}`} 
                        src={Talk2} 
                        alt="Speaker Default"
                    />
                    {/* Hover Image */}
                    <img 
                        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${changeSpeaker ? 'opacity-100' : 'opacity-0'}`} 
                        src={Talk} 
                        alt="Speaker Hover"
                    />
                    <div className={changeSpeaker ? 'text-white' : ''}>
                        <h1 className='mt-2 text-lg font-semibold relative z-10'>Talk</h1>
                        <p className='relative z-10'>Express your feelings</p>
                    </div>
                </div>
            </div>
            <p className='text-center absolute bottom-0 right-[45%] ml-14'>Essential {year}</p>
        </div>
    )
}

export default ListenOnboarding
