import { Jost } from '@next/font/google';
import Image from 'next/image';
import NEWLogo from '../../../public/NEWLogo.svg';
import Buttons from './Button';
import User from './User';
import profilePic from '../../../public/UserPfp.jpg';

const jost = Jost({ subsets: ['latin'] });

const Header = () => {
  return (
    <header
      className={`${jost.className} flex h-[85px] w-full items-center justify-between border-b border-slate-200 px-12`}
    >
      {/* Left  */}
      <div className="flex">
        {/* Logo  */}
        <div className="mr-14">
          <Image src={NEWLogo} width="120" height="120" alt="NEWLogo" />
        </div>

        {/* Buttons  */}
        <div className="flex items-center gap-4">
          <Buttons>Página inicial</Buttons>
          <Buttons isActive>Pacientes</Buttons>
          <Buttons>Agenda</Buttons>
        </div>
      </div>

      {/* Right  */}
      <User name="Roberto Massulo" pfp={profilePic}></User>
    </header>
  );
};

export default Header;
