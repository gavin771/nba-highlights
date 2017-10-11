import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Teams from './Teams/Teams'
import Team from './Team/Team'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/team/:id" component={Team} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App