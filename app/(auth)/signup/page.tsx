import React from 'react'
import { Button,Input } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'

function SignupPage() {
  return (
    <>
    <div className='flex flex-col px-10 py-2 rounded-md bg-slate-400 gap-3'>
    <div className='flex justify-center items-center'>
    <Image src='/Oxxo_Logo.svg' width={200} height={0} alt='logo'/>
    </div>
      <p className='text-center text-2xl font-bold'>Sign up</p>
      <Input label="Email" type='email' isRequired={true} size='sm'/>
      <Input label="Password" type='password' isRequired={true} size='sm'/>
      <Input label="Repeat password" type='password' isRequired={true} size='sm'/>
      <Button color='primary'>Signup</Button>
      <p>¿Ya tienes cuenta? <Link className='text-red-600 font-bold' href="/login">Inicia Sesión</Link></p>
    </div>

    </>
  )
}

export default SignupPage