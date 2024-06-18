import Image from 'next/image';
import Link from 'next/link';
import backgroundImage from '../public/dj_jackpot.jpg';

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-800 dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-20 dark:opacity-10"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-5 py-24">
        <div className="flex flex-col items-center text-center lg:w-2/3 w-full">
          <Image
            src="/dj_jackpot_2.jpg"
            alt="DJ Jackpot"
            width={400}
            height={400}
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl"
          />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300 dark:text-gray-100">
            Support DJ Jackpot&apos;s Mixtapes
          </h1>
          <p className="mb-8 leading-relaxed text-gray-300 dark:text-gray-300">
            &quot;Guys, Support ya lena e ntira Motho o mo kaone mo BOPHELONG, Modimo a le okeletse Matsatsi a Bophelo&quot; - DJ Jackpot
          </p>
          <div className="flex justify-center">
            <Link href="/mixtapes" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Explore Mixtapes
            </Link>
            <Link href={"/events"} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
