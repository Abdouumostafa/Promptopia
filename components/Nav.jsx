"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from '@/public/assets/images/logo.svg'

const Nav = () => {
  return (
    <nav className=" w-full mb-16 p-3">
      <Link href='/' className=" bg-black">
        <Image src={Logo} alt="Logo" width={30} height={30} className="object-contain" />
      </Link>
    </nav>
  )
}
export default Nav