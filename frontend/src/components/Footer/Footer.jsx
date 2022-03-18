import React from 'react'
import logo from '../../resources/images/logo-light.png'

export default function Footer() {

  return (
    <footer className='bg-light'>
      <div className='container pb-5'>
        <div className='row justify-content-md-center'>
          <div className='col align-self-center text-left'>
            <img alt='logo' src={logo} className='resized-logo' />
            <p className='text-center mt-2'>copyright © 2022 tadashiando</p>
          </div>
          <div className='col align-self-end'>
            <p className='lead'>This is a paginated list of the most recent movies on The Movie Database. This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <p>
              <span className='badge badge-success'>#TMDb</span> <span className='badge badge-warning'>#now-playing</span>{' '}
              <span className='badge badge-light'>#ReactJS</span> <span className='badge badge-danger'>#bootstrap</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
