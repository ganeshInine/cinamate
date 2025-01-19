import { Routes,Route } from "react-router-dom";
import { MovieDetails,SearchPage,PageNotFound, MovieList } from "../pages";

export const AllRoutes=()=>{
    return(
        <div className="dark:bg-slate-800">
            <Routes>
                <Route path="/" element={<MovieList api="movie/now_playing"/>}/>
                <Route path="movie/:id" element={<MovieDetails/>}/>
                <Route path="movies/popular" element={<MovieList api="movie/popular"/>}/>
                <Route path="movies/top" element={<MovieList api="movie/top_rated" />}/>
                <Route path="movies/upcomming" element={<MovieList api="movie/upcoming"/>}/>
                <Route path="search" element={<SearchPage api="search/movie"  />}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}
