import Search from './Search';
import Filter from './Filter';
import SortBy from './SortBy';

const ListFilters = () => {
  return (
    <div className="flex gap-4">
      <Search placeholder="Buscar paciente..."></Search>
      <Filter />
      <SortBy />
    </div>
  );
};

export default ListFilters;
