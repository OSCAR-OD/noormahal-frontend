//import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Loader from './Loader.svg';
export default async function LoadingPage() {
  //const t = await getTranslations()
  return (
    <div className='flex flex-col items-center justify-center min-h-screen '>
      {/* <div className='p-6 rounded-lg shadow-md w-1/3 text-center'> */}
        {/* {t('Loading.Loading')} */}
        <Image src={Loader} alt="Loading..." width={100} height={100} />
      {/* </div> */}
    </div>
  )
}
