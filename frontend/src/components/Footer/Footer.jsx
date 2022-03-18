import React, { useState } from 'react'
import logo from '../../resources/images/logo-light.svg'
import i18n from '../../i18n.json'

export default function Footer({ lang }) {
  const [labels] = useState(i18n.footer)

  return (
    <footer className='bg-light'>
      <div className='container pb-5'>
        <div className='row justify-content-md-center'>
          <div className='col align-self-center text-left'>
            <img alt='logo' src={logo} className='resized-logo' />
            <p className='text-center mt-2'>copyright © 2022 tadashiando</p>
          </div>
          <div className='col align-self-end'>
            <p className='lead'>{labels.text[lang]}</p>
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
