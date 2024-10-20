'use client'
import React from 'react'
import Image from 'next/image'
import { Button,Input } from '@nextui-org/react'
import Link from 'next/link'
import {API_URL} from '@/constants'
import axios from 'axios'

function Login() {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    let authData: any = {}
    authData.userEmail = formData.get('userEmail')
    authData.userPassword = formData.get('userPassword')

    const {data} = await  axios.post(`${API_URL}/auth/login`,{
      ...authData
    },{
      withCredentials: true
    })
    console.log(data)
  }
  return (
    <>
    <form className='flex flex-col px-10 py-2 rounded-md bg-slate-400 gap-3' onSubmit={handleSubmit}>
    <div className='flex justify-center items-center'>
    <Image src='/Oxxo_Logo.svg' width={200} height={0} alt='logo'/>
    </div>
      <p className='text-center text-2xl font-bold'>Login</p>
      <Input label="Email" name='userEmail' type='email' isRequired={true} size='sm'/>
      <Input label="Password" name='userPassword' type='password' isRequired={true} size='sm'/>
      <Button color='primary' type='submit'>Login</Button>
      <p>¿No tienes cuenta? <Link className='text-red-600 font-bold' href="/login">Registrate</Link></p>
    </form>

    </>
  )
}

export default Login
Login