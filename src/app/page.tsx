import Hello from '@/components/Hello';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1>Home</h1>
      <p>Welcome to the site!</p>

      <Link href="/about" className="text-blue-500 underline hover:text-blue-700">
        About Us
      </Link>

      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
      <p className="mt-4 text-gray-700">You’ve got Tailwind set up 🎉</p>

      <Hello/>
    </main>
  );
}
