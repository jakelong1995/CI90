import React from 'react'
import phoneLightVideo from '/Users/longtmh/Documents/GitHub/CI90/src/Invi/assets/phone-light.mp4';
import logo from '/Users/longtmh/Documents/GitHub/CI90/src/Invi/assets/InviSm.svg';
import { Button } from 'antd';

const homepage = () => {
  return (
    <div className='bg-rose-50'>
        <div className='mx-auto p-4 flex flex-col justify-between h-screen max-w-5xl'>
            
            {/* navbar */}
            <div className="w-full justify-between items-center inline-flex">
                <img src={logo} alt="logo" className='w-10'/>
                <Button className=''>Sign In</Button>
            </div>  

            {/* body */}
            <div className='flex flex-col md:flex-row gap-16 justify-between w-full'>

                <div className='flex flex-col max-w-sm gap-8 items-center text-center md:items-start md:text-left mx-auto'>
                    <img src={logo} alt="logo" className='w-16'/>
                    <h1 className='text-gray-800 font-semibold text-4xl md:text-5xl'>Delightful events <span className='text-rose-400'>start here.</span> </h1>
                    <p className='text-gray-600'>Set up an event page, invite friends and sell tickets. Host a memorable event today.</p>
                    <button type='primary' className='w-fit'>Create Your First Event</button>
                </div>
                
                <video autoPlay muted className='w-full md:max-w-lg md:mx-auto'>
            <source src={phoneLightVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
            </div>

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default homepage