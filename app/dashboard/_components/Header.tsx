import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='w-screen h-[10vh] flex flex-row items-center px-10 bg-green-500'>
      <Image src='/Oxxo_Logo.svg' width={100} height={0} alt='logo' draggable={false}/>
    </div>
  )
}

export default Header
