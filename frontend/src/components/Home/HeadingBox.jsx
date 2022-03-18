import React, { useState, Fragment } from 'react'
import dompurify from 'dompurify'
import i18n from '../../i18n.json'

export default function HeadingBox({ lang, setPage, page }) {
  const [labels] = useState(i18n.homepageHeadingBox)

  const handlePageDown = (e) => {
    e.preventDefault()
    setPage(page > 1 && page-- )
  }

  const handlePageUp = (e) => {
    e.preventDefault()
    setPage(page++)
  }

  return (
    <Fragment>
      <div className='bg-dark text-light'>
        <div className='container'>
          <div className='row'>
            <h1
              className='col'
              dangerouslySetInnerHTML={{
                __html: dompurify.sanitize(labels.heading[lang])
              }}></h1>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a class="page-link" onClick={handlePageDown} href='#' tabindex="-1">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link"onClick={handlePageUp} href='#' >Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
