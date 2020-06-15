import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StartPage } from 'pages/StartPage'
import { InfoPage } from 'pages/InfoPage'
import { Movies } from 'pages/Movies'
import { MovieInfo } from 'pages/MovieInfo'
import { Programme } from 'pages/Programme'
import { Venues } from 'pages/Venues'
import { Skolbio } from 'pages/Skolbio'
import { Awards } from 'pages/Awards'
import { AboutPage } from 'pages/AboutPage'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <StartPage />
          </Route>
        <Route path='/home'>
          <InfoPage />
        </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/movieinfo/:title'>
            <MovieInfo />
          </Route>
          <Route path='/programme'>
            <Programme />
          </Route>
          <Route path='/venues'>
            <Venues />
          </Route>
          <Route path='/skolbio'>
            <Skolbio />
          </Route>
          <Route path='/awards'>
            <Awards />
          </Route>
          <Route path='/aboutpage'>
            <AboutPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
  )
}
