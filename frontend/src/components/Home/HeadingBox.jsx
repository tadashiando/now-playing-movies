import React, { Fragment } from 'react'

export default function HeadingBox({ handlePageUp, handlePageDown }) {

  return (
    <Fragment>
      <div className='bg-dark text-light'>
        <div className='container'>
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
      </div>
    </Fragment>
  )
}
