import React, { useState } from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomeWrapper from './Home/HomeWrapper'
import Page404 from './404/404'
import LangSelector from './LangSelector/LangSelector'
import urlParamFinder from '../lib/urlParamFinder'

export default function App() {
  const [lang] = useState(urlParamFinder() || 'en')

  return (
    <div className='App'>
      <nav className='lang-position'>
        <LangSelector lang={lang} currentLang='en' /> <LangSelector lang={lang} currentLang='es' />
      </nav>
      <Header lang={lang} />
      <BrowserRouter>
        <Routes>
          <Route exact path='/:lang' component={HomeWrapper} />
          <Route component={Page404} />
        </Routes>
      </BrowserRouter>
      <Footer lang={lang} />
    </div>
  )
}
