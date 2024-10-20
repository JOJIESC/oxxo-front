import React from 'react'
import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from 'react-icons/lu'
import NavItem from './NavItem'

function Sidebar() {
  return (
    <nav className='flex flex-col items-center w-1/12 h-[90vh] bg-slate-400 py-20'>
      <NavItem icon={<LuStore className='text-4xl' />} path='/dashboard'/>
      <NavItem icon={<LuTruck className='text-4xl'/>} path='/dashboard/providers'/>
      <NavItem icon={<LuWheat className='text-4xl' />} path='/dashboard/products'/>
      <NavItem icon={<LuUser className='text-4xl' />} path='/dashboard/managers'/>
      <NavItem icon={<LuUsers className='text-4xl' />} path='/dashboard/employyes'/>
    </nav>
  )
}

export default Sidebar
