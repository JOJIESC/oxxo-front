'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
    icon: React.ReactNode
    path: string
    }

const NavItem = ({ icon,path }: NavItemProps) => {
    const pathName = usePathname()

    return (
    <Link href={path} className="w-full flex justify-center" >
        <span className={`w-10/12 flex justify-center rounded-md transition-colors py-2 ${pathName === path ? 'bg-orange-200': ""}`}>
            {icon}
        </span>
    </Link>
    )
}

export default NavItem
