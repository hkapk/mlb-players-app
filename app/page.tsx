import Image from 'next/image'
import { Hero, CustomFilter, SearchBar } from '@/components';
import "../app/globals.css";
import { fetchPlayers } from '@/utils';

export default async function Home() {

  const allPlayers = await fetchPlayers();

  console.log(allPlayers);
  return (
    <main className="overflow-hidden">
      < Hero />
      <div className="mt-12 sm:px-16 px-6 py-4
      max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold"> Player Catalogue</h1>
          <p>Browse Players</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="team" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
