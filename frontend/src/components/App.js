import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomeWrapper from './Home/HomeWrapper'
import Page404 from './404/404'

export default function App() {

  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeWrapper />} />
          <Route path='/404' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
