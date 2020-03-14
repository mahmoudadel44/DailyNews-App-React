import React, { Component } from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Home from '../containers/Home'
import News from '../containers/News'
import Gallery from '../containers/GalleryItem'
 class App extends Component {
    render() {
        return (
          <BrowserRouter>
          <div>
              <Header/>
          <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/news/:id" component={News}></Route>
          <Route exact path="/galleries/:id" component={Gallery}></Route>
          </Switch>
          <Footer/>
          </div>
          </BrowserRouter>
        )
    }
}

export default App;