import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';
export const SearchPage = ({api}) => {
  console.log("WE are gere");
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(api, queryTerm);
  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{
        movies.length===0?`Movie not found for${queryTerm}`:`Result for ${queryTerm}`  }
        </p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}

        </div>
      </section>
    </main>
  )
}
