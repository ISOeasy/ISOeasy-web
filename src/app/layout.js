import "./globals.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import localFont from 'next/font/local';
import "../../node_modules/animate.css";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const myFont = localFont({ src: '../../public/manrope.ttf' });
const metadata = {
  title: 'ISO Easy',
  description: 'A Pipeline Company',
  icons: {
    icon: '/icon.png',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <title>{metadata.title}</title>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
