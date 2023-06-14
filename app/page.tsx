import Image from 'next/image'
import { Hero, CustomFilter, SearchBar, ScoreCard } from '@/components';
import "../app/globals.css";
import { fetchPlayers, fetchScores } from '@/utils';

export default async function Home() {

  const allPlayers = await fetchPlayers();
  const allScores = await fetchScores();

  const isDataEmpty = !Array.isArray(allScores) || allScores.length < 1 || !allScores;

  console.log(allScores);
  return (
    <main className="overflow-hidden">
      < Hero />
      <div className="mt-12 sm:px-16 px-6 py-4
      max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold"> Player Catalogue</h1>
          <p>Browse Rosters</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="team" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <h1 className="font-bold px-5 py-5">Recent Scores</h1>
            <p className="px-5 py-5">all times are CST</p>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allScores?.map((weeklyscores) => <ScoreCard weeklyscores={weeklyscores} />)}
            </div>
          </section>
        ) : (
          <div>
            <h2> No Scores available, must be the offseason</h2>
          </div>
        )}


      </div>
    </main>
  )
}
