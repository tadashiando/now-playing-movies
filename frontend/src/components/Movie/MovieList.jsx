import React from 'react'
import Movie from './Movie'
import Loading from '../Loading/Loading'

export default function MovieList({ data, dataIsReady, handlePageDown, handlePageUp }) {
  const movieList = data?.results
  const boxes = [0,1,2]

  return (
    <div className='bg-dark py-2'>
      {dataIsReady ? (
        <div className='container'>
          <div className='row'>
            {movieList.map(movie => (
              <Movie key={movie.id} data={movie} />
            ))}
          </div>
          <div className='row'>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item">
                  <a className="page-link" onClick={e => handlePageDown(e)} href >Previous Page</a>
                </li>
                <li className="page-item">
                  <a className="page-link"onClick={e => handlePageUp(e)} href >Next Page</a>
                </li>
              </ul>
            </nav>
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
