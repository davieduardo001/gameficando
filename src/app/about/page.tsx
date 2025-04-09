import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>About</h1>
      <p>Welcome to the site!</p>

      <Link href="/" className="text-blue-500 underline hover:text-blue-700">
        Home
      </Link>

    </main>
  );
}
