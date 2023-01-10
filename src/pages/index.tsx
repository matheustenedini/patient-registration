import Header from '../components/Header';
import PatientsList from '../components/PatientsList';
import Head from 'next/head';
import ListFilters from '../components/ListFilters';
import ListActions from '../components/ListActions';

export default function Home() {
  return (
    <div className="flex h-full max-h-screen w-full flex-col overflow-y-auto">
      <Head>
        <title>ACME | Pacientes</title>
      </Head>

      <Header />

      <main className="flex w-full flex-1 flex-col overflow-hidden px-12 pt-16 pb-8">
        <div>
          <h2 className="text-4xl font-semibold text-slate-900">Pacientes</h2>
        </div>
        <div className="mt-6 flex justify-between">
          <ListFilters />
          <ListActions />
        </div>

        <PatientsList />
      </main>
    </div>
  );
}
