import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StartPage } from 'pages/StartPage'
import { InfoPage } from 'pages/InfoPage'
import { Movies } from 'pages/Movies'
import { MovieInfo } from 'pages/MovieInfo'
import { Programme } from 'pages/Programme'
import { Memories } from 'pages/sections/Memories'
import { StopMotions } from 'pages/sections/StopMotions'
import { Halloween } from 'pages/sections/Halloween'
import { Realities } from 'pages/sections/Realities'
import { Families } from 'pages/sections/Families'
import { Dependencies } from 'pages/sections/Dependencies'
import { Kids } from 'pages/sections/Kids'
import { Sensibilities } from 'pages/sections/Sensibilities'
import { Guests } from 'pages/sections/Guests'
import { DeadMan } from 'pages/sections/DeadMan'
import { Bunuel } from 'pages/sections/Bunuel'
import { Venues } from 'pages/Venues'
import { RexKids } from 'pages/RexKids'
import { Awards } from 'pages/Awards'
import { AboutPage } from 'pages/AboutPage'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export const Home = () => {

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
        <Route path='/memories'>
          <Memories />
        </Route>
        <Route path='/stopmotions'>
          <StopMotions />
        </Route>
        <Route path='/halloween'>
          <Halloween />
        </Route>
        <Route path='/realities'>
          <Realities />
        </Route>
        <Route path='/families'>
          <Families />
        </Route>
        <Route path='/dependencies'>
          <Dependencies />
        </Route>
        <Route path='/kids'>
          <Kids />
        </Route>
        <Route path='/sensibilities'>
          <Sensibilities />
        </Route>
        <Route path='/guests'>
          <Guests />
        </Route>
        <Route path='/deadman'>
          <DeadMan />
        </Route>
        <Route path='/bunuel'>
          <Bunuel />
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
        <Route path='/rexkids'>
          <RexKids />
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

