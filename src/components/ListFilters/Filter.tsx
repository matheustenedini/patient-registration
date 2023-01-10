import Button from '../Button';
import { IoFilterOutline } from 'react-icons/io5';

const Filter = () => {
  return (
    <Button
      variant="secondary"
      className="cursor-not-allowed hover:bg-transparent"
    >
      <IoFilterOutline className="text-lg" />
      Filtrar
    </Button>
  );
};

export default Filter;
