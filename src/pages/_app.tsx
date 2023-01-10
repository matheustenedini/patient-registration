import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';
import '../../styles/global.css';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.className} h-full w-full font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
