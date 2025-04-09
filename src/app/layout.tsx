import '@/styles/globals.css';
import { lato, nova_square } from '../../public/fonts/fonts';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <nav className={nova_square.className}>HELLOOOO</nav>
        {children}
      </body>
    </html>
  );
}
