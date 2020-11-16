import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Main from '../Main'

import './index.scss';

export const App = () => {
  return (
    <div className="app">
      <div className="app-main-container">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
