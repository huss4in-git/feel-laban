import React from 'react'

function Footer() {
  return (
    <div className='h-[20vh] px-4 mt-5 w-full flex flex-col justify-center items-center' style={{backgroundColor:'#015de4'}}>
        
        <div className="flex flex-wrap gap-2 justify-center text-white text-sm w-full text-center">
            <p>feellaban.in</p>
            <p className='border-x px-2'>feellaban@gmail.com</p>
            <p>+91 123456789</p>
        </div>
    </div>
  )
}

export default Footer
