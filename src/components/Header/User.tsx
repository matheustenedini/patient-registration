import Image, { StaticImageData } from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

interface IUser {
  name: string;
  pfp: StaticImageData;
}

const User = ({ name, pfp }: IUser) => {
  return (
    <div className="flex items-center">
      <Image
        width="38"
        height="38"
        src={pfp}
        alt="Foto do usuário"
        className="mr-4 rounded-full"
      ></Image>
      <span className="mr-2 font-medium">{name}</span>

      <FiChevronDown className="text-sm"></FiChevronDown>
    </div>
  );
};

export default User;
