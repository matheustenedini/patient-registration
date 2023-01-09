import Header from '../components/Header';
import { FiUpload } from 'react-icons/fi';
import Button from '../components/Button';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import PatientsList from '../components/PatientsList';

export default function Home() {
  return (
    <div>
      <Header />

      <main className="w-full py-16 px-12">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold text-slate-900">Pacientes</h2>
          {/* buttons */}
        </div>
        <div className="mt-6 flex justify-between">
          <div className="flex gap-4">
            <Search placeholder="Buscar paciente..."></Search>
            <Filter />
            <Sort />
          </div>
          <div className="flex gap-4">
            {/* Buttons */}
            <Button variant="secondary" onClick={() => console.log('aaaa')}>
              <FiUpload className="text-sm" />
              Exportar tabela
            </Button>
            <Button variant="primary">Add paciente</Button>
          </div>
        </div>

        <PatientsList />
      </main>
    </div>
  );
}
