import React from 'react'
import logo from '../../resources/images/logo-dark.png'
import github from '../../resources/images/github.svg'
import linkedin from '../../resources/images/linkedin.png'

export default function Header({ lang }) {

  const imagePlacement = 'url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)'

  return (
    <div
      className='bg-dark pb-3'
      style={{
        backgroundImage: imagePlacement,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <div className='container text-white'>
        <div className='row justify-content-md-center'>
          <div className='col'>
            <a href={`/${lang}`}>
              <img className='img-fluid text-center resized-logo' src={logo} alt='logo' />
            </a>
          </div>
          <div className='col-auto align-self-end my-2 d-none d-lg-block'>
            <ul className='list-unstyled align-bottom social-list-margin'>
              <li className='my-2'>
                <a
                  href='https://github.com/tadashiando'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-light social-link-style'>
                  <img className='float-left social-img-style' alt='github logo' src={github} />
                  GitHub
                </a>
              </li>
              <li className='my-2'>
                <a
                  href='https://linkedin.com/in/tadashiando/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-light float-left social-link-style'>
                  <img className='float-left social-img-style' alt='linkedin logo' src={linkedin} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
