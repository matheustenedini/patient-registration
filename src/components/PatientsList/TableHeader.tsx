const tableColumns = [
  'Nome',
  'Data de nascimento',
  'CPF',
  'Endereço',
  'Sexo',
  'Status',
  '',
];

const TableHeader = () => {
  return (
    <div className="sticky top-0 flex w-full gap-4 border-b border-slate-300 bg-white py-2 px-4">
      {tableColumns.map(column => (
        <div
          key={column}
          className={`w-full flex-1 basis-[200px] overflow-hidden text-xs font-medium uppercase text-slate-600 ${
            (column === 'Endereço' && 'basis-[250px]') ||
            (column === 'Sexo' && 'basis-[150px]') ||
            (column === 'Status' && 'basis-[150px]') ||
            (column === '' && 'basis-[50px]')
          }`}
        >
          {column}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
