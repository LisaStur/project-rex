import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StartPage } from 'pages/StartPage'
import { Movies } from 'pages/Movies'
import { Programme } from 'pages/Programme'
import { Skolbio } from 'pages/Skolbio'
import { Awards } from 'pages/Awards'
import { AboutPage } from 'pages/AboutPage'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <StartPage />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/programme'>
            <Programme />
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
      </BrowserRouter>
    </div>
  )
}
