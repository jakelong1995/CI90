import React from 'react'
import phoneLightVideo from '/Users/longtmh/Documents/GitHub/CI90/src/Invi/assets/phone-light.mp4';
import logo from '/Users/longtmh/Documents/GitHub/CI90/src/Invi/assets/InviSm.svg';
import logopng from '/Users/longtmh/Documents/GitHub/CI90/src/Invi/assets/Invi.png';

const homepage = () => {
  return (
    <div className='bg-rose-50'>
        <div className='mx-auto p-4 flex flex-col justify-between h-screen max-w-5xl'>
            
            {/* navbar */}
            <div className="w-full justify-between items-center inline-flex">
                <img src={logo} alt="logo" className='w-10'/>
                <button className='px-4 py-2 bg-black bg-opacity-5 hover:bg-gray-500 hover:text-white hover: border-none rounded-full inline-flex text-gray-500 text-sm font-semibold'>Sign In</button>
            </div>  

            {/* body */}
            <div className='flex flex-col md:flex-row gap-16 justify-between w-full'>

                <div className='flex flex-col max-w-sm gap-8 items-center text-center md:items-start md:text-left mx-auto'>
                    <img src={logopng} alt="logo" className='w-16'/>
                    <h1 className='text-gray-800 font-semibold text-4xl md:text-5xl'>Delightful events <span className='text-rose-400'>start here.</span> </h1>
                    <p className='text-gray-600'>Set up an event page, invite friends and sell tickets. Host a memorable event today.</p>
                    <button className='px-6 py-2 bg-gray-800 rounded-lg text-white text-lg font-medium hover:bg-gray-600 border-none'>Create Your First Event</button>
                </div>
                
                <video autoPlay muted className='w-full md:max-w-lg md:mx-auto'>
            <source src={phoneLightVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
            </div>

            <div className="w-full border-t border-gray-800 border-opacity-10 gap-4 inline-flex">
    
            </div>
        </div>
    </div>

  )
}

export default homepage