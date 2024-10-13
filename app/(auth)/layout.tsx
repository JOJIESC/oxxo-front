import React from 'react'

function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className='w-screen h-screen overflow-hidden grid'>
        <div className='place-content-center place-self-center'>
        {children}
        </div>
    </div>
  )
}

export default AuthLayout
