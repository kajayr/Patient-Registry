import React from 'react'
import {Header} from './components/header.jsx'
import {Footer} from './components/Footer.jsx'
import {Home} from './components/Home.jsx'
import { BrowserRouter, Route, Switch} from 'react-router-dom' ;
import {Body} from './components/Body.jsx'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
<BrowserRouter>
            <div className="container mt-md-5">
                <div className="row">
                    <Header />
                </div>
            </div>
            <Switch>
                <Route exact  path="/" component={Home}></Route>
                {/* <Route exact  path="/allpatients" component={allPatients}></Route>
                <Route exact  path="/projects" component={Projects}></Route>
                <Route exact  path="/education" component={Education}></Route> */}
            </Switch>
            <div className="container">
                <div className="row mt-1">
                    <Footer />
                </div>
            </div>
            
</BrowserRouter>
    )
  }
}

export default App;
