import { RiSearch2Line } from 'react-icons/ri';
import usePatientsListStore from '../../store/usePatientsListStore';

interface ISearch {
  placeholder: string;
}

const Search = ({ placeholder }: ISearch) => {
  const setSearchValue = usePatientsListStore(state => state.setSearchValue);

  return (
    <div className="relative h-[40px] w-[350px]">
      <input
        type="text"
        onChange={e => setSearchValue(e.target.value)}
        placeholder={placeholder}
        className="peer h-full w-full rounded-lg border border-slate-300 pl-10 text-sm text-slate-600 placeholder:text-slate-500 focus:border-logo focus:outline-none"
      />
      <RiSearch2Line className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-500 peer-focus:text-logo"></RiSearch2Line>
    </div>
  );
};

export default Search;
