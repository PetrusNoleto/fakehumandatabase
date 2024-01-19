import FlagPageComponent from '@/components/flags/flagPageComponent';
import HeaderComponent from '@/components/header/HeaderComponent';
import HumansTableComponent from '@/components/table/humansTableComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'fakehuman database / nation',
  description: 'page for only nation',
}



export default function NationPage() {  
 
  
  return (
    <div>
      <HeaderComponent/>
      <main className = "pt-20">
        <FlagPageComponent/>
        <div className='flex justify-center p-3'>
          <HumansTableComponent />
        </div>
      </main>    
      </div>  
   
  );
}
