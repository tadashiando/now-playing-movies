import React from 'react'

export default function Movie({ lang, data }) {
  const getPoster = () => {
    const poster = 'https://image.tmdb.org/t/p/w342' + data.poster_path
    return poster
  }

  const getTitle = () => {
    const title = data.title
    return title
  }

  const getReleaseDate = () => {
    const overview = data.release_date
    return overview
  }

  return (
    <div className='col-md-4'>
      <div className='card bg-dark text-white border-0'>
        <div>
          <div className='img-zoom-container'>
            <div className='img-zoom'>
              <img className='card-img-top' alt='movie poster' src={getPoster()} />
            </div>
          </div>
        </div>
        <div className='card-body'>
          <h2>{getTitle()}</h2>
          <p>Release Date: {getReleaseDate()}</p>
        </div>
      </div>
    </div>
  )
}
