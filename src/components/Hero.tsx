import Image from 'next/image'
import React from 'react'
import profileImage from "../../public/images/posts/profile.jpg"
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='text-center'>
        <Image className='rounded-full mx-auto h-60 w-60 object-cover object-top' src={profileImage} alt="profile" priority></Image>
        <h2 className='text-3xl font-bold mt-2'>{"Hi, i'm kibum"}</h2>
        <h3 className='text-xl font-semibold'>개발자</h3>
        <p>좋은 사람</p>
        <Link href='/contact'>
            <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact Me</button>
        </Link>
    </section>
  )
}

export default Hero