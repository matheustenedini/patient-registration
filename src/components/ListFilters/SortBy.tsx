import * as ToggleGroup from '@radix-ui/react-toggle-group';
import usePatientsListStore from '../../store/usePatientsListStore';

const SortBy = () => {
  const setSortBy = usePatientsListStore(state => state.setSortBy);
  const sortBy = usePatientsListStore(state => state.sortBy);

  return (
    <ToggleGroup.Root
      type="single"
      value={sortBy || ''}
      onValueChange={(value: 'latest' | 'oldest') => {
        if (value) setSortBy(value);
      }}
      aria-label="Ordenar por"
      className="flex items-center overflow-hidden rounded-lg border border-slate-300 text-xs font-medium text-slate-500"
    >
      <ToggleGroup.Item
        value="latest"
        aria-label="Mais recentes"
        className="border-r border-slate-300 px-2 transition-colors hover:text-slate-600 radix-state-on:text-logo"
      >
        Mais recente
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="oldest"
        aria-label="Mais antigos"
        className="px-2 transition-colors hover:text-slate-600 radix-state-on:text-logo"
      >
        Mais antigo
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default SortBy;
