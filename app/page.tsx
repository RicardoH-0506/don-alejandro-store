import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

export default function Page () {
  return (
    <main className='flex min-h-screen flex-col p-6'>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <div className='flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20'>
          <p className='text-xl text-gray-800 md:text-3xl md:leading-normal'>
            "Encuentra todo lo que necesitas, con mejor calidad, frescura. <strong>Don Alejandro</strong>, donde cada compra te hace sonreír."
          </p>
          <Link
            href='/dashboard'
            className='flex items-center gap-5 self-start rounded-sm bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-400 md:text-base'
          >
            <span>Panel Principal</span> <ArrowRightIcon className='w-5 md:w-6' />
          </Link>
        </div>
        <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
          <img
            src='/graphs.svg'
            alt='Ilustración de un tablero de datos con gráficos de barras y circulares.'
            className='w-1000 h-760 hidden md:block'
          />
          <Image
            src='/graphs.svg'
            alt='Ilustración de un tablero de datos con gráficos de barras y circulares.'
            width={560}
            height={620}
            className='block md:hidden'
          />
        </div>
      </div>
    </main>
  )
}
