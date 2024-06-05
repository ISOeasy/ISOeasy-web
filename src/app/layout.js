import './globals.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import localFont from 'next/font/local';
import "../../node_modules/animate.css";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const myFont = localFont({ src: '../../public/manrope.ttf' });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
