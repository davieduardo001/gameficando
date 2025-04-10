import Link from 'next/link';
import { nova_square } from '../../public/fonts/fonts';

export default function HomePage() {
  return (
    <>
    {/* hero section */}
      <main className="flex min-h-screen flex-col items-center xl:pt-80 lg:pt-70 md:pt-70 pt-80 p-5 bg-[url('/images/gameficando_background.svg')]">
        <img src="/images/logo.png" alt="logo" className='w-100 xl:min-w-150'/>
        <h2 className='font-bold text-xl text-white'>Sua jornada de diversão e aprendizado começa gameficando!</h2>
      </main>

    {/* beneficios do curso */}
      <section className='flex min-h-screen flex-col'>
        <h2>AAA</h2>
      </section>
    </>
  );
}
