import HeaderComponent from '@/components/header/HeaderComponent';
import NationsList from '@/components/lists/nationsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'fakehuman database / nations',
  description: 'page for all nations',
}

export default function Nations() {
  


return (
  <div className='relative w-full h-screen'>
    <HeaderComponent />
    <main className=' w-full pt-20'>
      <NationsList />
    </main>
  </div>
  )
}
