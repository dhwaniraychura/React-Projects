import { useState } from 'react'
import './index.css'
import './App.css'
import './Font.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Cinematic from './components/Cinematic'
import Card from './components/Card'
import GamePresents from './components/Game_Presents'
import Subscribe from './components/Subscribe'
import CounterSection from './components/Counter_Section'
import About_game from './components/About_game'
import Game_Portfolio from './components/Game_Portfolio'
import Footer from './components/Footer'


function App() {
  return (
    <>
        <Header/>
        <Banner/>
        <About/>
        <Cinematic/>
        <Card/>
        <GamePresents/>
        <Subscribe/>
        <CounterSection/>
        <About_game/>
        <Game_Portfolio/>
        <Footer/>
    </>
  )
}

export default App
