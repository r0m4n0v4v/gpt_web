import React from 'react';

import { Navbar, CTA } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT, Header } from './containers';
import './App.css'

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <WhatGPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App