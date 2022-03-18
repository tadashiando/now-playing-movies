import React, { useState, useEffect, Fragment, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import MovieList from '../Movie/MovieList'
import HeadingBox from './HeadingBox'

export default function HomeWrapper() {
  const [data, setData] = useState(null)
  const [dataIsReady, setDataIsReady] = useState(false)
  const [page, setPage] = useState(1)
  
  const { lang } = useParams()

  const getTmdbApi = useCallback(async () => {
    try {
      const response = await fetch(`/api/${lang}/now-playing?` + new URLSearchParams({ page }))
      const json = await response.json()
      setData(json)
      setDataIsReady(true)
    } catch (e) {
      console.error(e)
    }
  }, [lang, page])

  useEffect(() => {
    getTmdbApi()
  }, [lang, getTmdbApi])

  return (
    <Fragment>
      <HeadingBox lang={lang} setPage={setPage} page={page} />
      <MovieList lang={lang} data={data} dataIsReady={dataIsReady} />
    </Fragment>
  )
}
