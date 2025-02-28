import React, { useState } from 'react'
import Modal from '../../component/modals'
import Intro from './intro'
import ThankLayout from './general/ThankLayout'

const ThanksForComing = () => {

    const [showIntro, setShowIntro] = useState(true)
    const [eventType, setEventType] = useState('host')

  return (
    <div className='bg-backgound_primary w-screen h-screen'>
        <h1>Welcome to our</h1> 
        <Modal showModal={showIntro} setShowModal={()=>{setShowIntro(false)}}>
            <Intro setEventType={setEventType} setShowIntro={setShowIntro}/>
        </Modal>
        <ThankLayout/>  
    </div>
  )
}

export default ThanksForComing