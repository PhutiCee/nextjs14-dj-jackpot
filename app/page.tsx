import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="/dj_jackpot.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className='opacity-30 dark:opacity-10'
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-around h-full max-w-7xl mx-auto">
        <div className='flex flex-col items-center max-w-xl py-8 md:py-16 px-6 md:px-12 text-center'>
          <h1 className='text-3xl md:text-6xl font-semibold text-gray-800 dark:text-gray-100 leading-tight mt-4 md:mt-0 mb-4'>Support DJ Jackpot&apos;s Mixtapes</h1>
          <p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>&quot;Guys, Support ya lena e ntira Motho o mo kaone mo BOPHELONG, Modimo a le okeletse Matsatsi a Bophelo&quot; - DJ Jackpot</p>
          <Link href={'/mixtapes'}>
            <div className='inline-block py-3 px-8 bg-green-500 hover:bg-green-600 text-white rounded-lg text-lg font-semibold transition duration-300 ease-in-out'>Explore Mixtapes</div>
          </Link>
        </div>

        <div className='flex justify-center items-center mx-auto md:ml-0'>
          <Image
            src="/dj_jackpot_2.jpg"
            alt="DJ Jackpot"
            width={400}
            height={400}
            className='rounded-lg md:rounded-full'
          />
        </div>
      </div>
    </div>
  );
}
