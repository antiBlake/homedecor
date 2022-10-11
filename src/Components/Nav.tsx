import React from 'react'

const Nav = (): any => {
  return (
    <div className='Nav'>
        <div className='web-nav flex border-2'>
            <div className='logo w-2/12 sm:w-1/12'>
            <img src='images/logo.svg'  />
            
            </div>
            <div className='nav-1 flex flex-row w-4/12'>
                <li className='list-none'>Home</li>
                <li className='list-none'>Products</li>
                <li className='list-none'>About Us</li>
            </div>
            


        </div>
        <div className='mobile-nav'>

        </div>
        
    </div>
  )
}

export default Nav