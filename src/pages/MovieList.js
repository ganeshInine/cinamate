import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({api}) => {
  //https://api.themoviedb.org/3/movie/now_playing?api_key=
  const{data : movies } = useFetch(api);
    
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/>
          ))}
          
        </div>
      </section>
    </main>
  )
}
