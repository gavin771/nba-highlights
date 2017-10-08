import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App