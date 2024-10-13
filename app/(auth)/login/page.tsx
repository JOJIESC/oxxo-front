import React from 'react'
import Image from 'next/image'
import { Button,Input } from '@nextui-org/react'
import Link from 'next/link'

function Login() {
  return (
    <>
    <div className='flex flex-col px-10 py-2 rounded-md bg-slate-400 gap-3'>
    <div className='flex justify-center items-center'>
    <Image src='/Oxxo_Logo.svg' width={200} height={0} alt='logo'/>
    </div>
      <p className='text-center text-2xl font-bold'>Login</p>
      <Input label="Email" type='email' isRequired={true} size='sm'/>
      <Input label="Password" type='password' isRequired={true} size='sm'/>
      <Button color='primary'>Login</Button>
      <p>¿No tienes cuenta? <Link className='text-red-600 font-bold' href="/login">Registrate</Link></p>
    </div>

    </>
  )
}

export default Login
Login