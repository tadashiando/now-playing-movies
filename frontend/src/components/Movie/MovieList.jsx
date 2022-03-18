import React from 'react'
import Movie from './Movie'
import Loading from '../Loading/Loading'

export default function MovieList({ lang, data, dataIsReady }) {
  console.log(data);
  const movieList = data?.results
  const boxes = [0,1,2]

  return (
    <div className='bg-dark py-2'>
      {dataIsReady ? (
        <div className='container'>
          <div className='row'>
            {movieList.map(movie => (
              <Movie lang={lang} key={movie.id} data={movie} />
            ))}
          </div>
        </div>
      ) : (
        <div className='container'>
          <div className='row'>
            {boxes.map(box => (
              <Loading key={box} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
