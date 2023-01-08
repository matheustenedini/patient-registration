import { Montserrat } from '@next/font/google';
import Header from '../components/Header';

const inter = Montserrat({ weight: ['400', '500', '600', '700'] });
export default function Home() {
  return (
    <div className={inter.className}>
      <Header />
    </div>
  );
}
