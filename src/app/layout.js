import "./globals.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import localFont from 'next/font/local';
import "../../node_modules/animate.css";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ApolloProvider from '@/components/ApolloProvider';

const myFont = localFont({ src: '../../public/manrope.ttf' });

export const metadata = {
  title: 'ISO Easy',
  description: 'A Pipeline Company',
  icons: {
    icon: '/favicon.ico',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={myFont.className}>
        <ApolloProvider>
          <Header />
          {children}
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
