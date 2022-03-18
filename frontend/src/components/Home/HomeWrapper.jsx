import React, { useState, useEffect, Fragment } from 'react'
import MovieList from '../Movie/MovieList'
import HeadingBox from './HeadingBox'

export default function HomeWrapper() {
  const [data, setData] = useState(null)
  const [dataIsReady, setDataIsReady] = useState(false)
  const [page, setPage] = useState(1)

  const handlePageDown = (e) => {
    e.preventDefault()
    if (page > 1) {
      let decrement = page - 1
    setPage(decrement)
    }
  }
  
  const handlePageUp = (e) => {
    e.preventDefault()
    let increment = page + 1
    setPage(increment)
  }

  const getTmdbApi = async () => {
    try {
      const response = await fetch(`/api/now-playing?` +
        new URLSearchParams({ page }))
      const json = await response.json()
      setData(json)
      setDataIsReady(true)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getTmdbApi()
  }, [page])

  return (
    <Fragment>
      <HeadingBox 
        handlePageUp={handlePageUp} 
        handlePageDown={handlePageDown} />
      <MovieList 
        data={data}
        dataIsReady={dataIsReady}
        handlePageUp={handlePageUp}
        handlePageDown={handlePageDown} />
    </Fragment>
  )
}
