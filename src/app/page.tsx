import HeaderComponent from '@/components/header/HeaderComponent';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'fakehuman database / homepage',
  description: 'Created to test projects using names that look like real people, in any project that uses any of this data.',
}



export default function Home() {
  return (
    <div className='relative w-full h-screen'>
       <Image src={"/image/homepagebackground.jpeg"} alt='homepage background' fill={true}/>
        <div className='w-full h-full absolute top-0 left-0'>
          <HeaderComponent />
          <main className='flex flex-col w-full h-screen justify-center items-center gap-3 '>
                <h2 className='text-6xl font-bold text-white uppercase text-center'>fakehuman<br/>database</h2>
                <p className='text-xl font-semibold text-white'>Created to test projects using names that look like real people, in any project that uses any of this data.</p>
                <Link className='capitalize h-[50px] leading-[50px] w-auto px-3 border bg-white rounded-lg text-sm font-normal hover:border-white hover:bg-black  hover:text-white duration-300' href={'/nations'}>view nations</Link>
          </main>
        </div>   
    </div>
  )
}
