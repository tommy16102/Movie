import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import axios from 'axios';


function MovieApi({query, kind}){
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchMovies = async () => {
      try {
        setError(null);
        setMovies(null);
        setLoading(true);
        const response = await axios.get(
          query
        );

        if(kind===1) setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);
        else if(kind===2) {
          setMovies(response.data.movieListResult.movieList.filter(movie=>movie.prdtStatNm==="개봉예정"));
        }
        else if(kind===3) setMovies(response.data.boxOfficeResult.weeklyBoxOfficeList);
        console.log(movies);
      } catch (e) {
        console.log(e);
        setError(e);
      }
      setLoading(false);
    };

    useEffect(() => {
      fetchMovies();
    }, []);

    if (loading) return (
      <>
        <h1>로딩중..</h1>
        <button onClick={fetchMovies}>불러오기</button>
      </>
    )
    if (error) return (
      <>
        <h1>에러가 발생했습니다</h1>
        <button onClick={fetchMovies}>불러오기</button>
      </>
    )
    return (
        <>
          <ul>
            {movies && movies.map((movie,index) => (
                <li key={index}>{movie.movieNm}</li>
            ))}
          </ul>
          <button onClick={fetchMovies}>불러오기</button>
        </>
  );
}

export default MovieApi;