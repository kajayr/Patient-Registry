import React from 'react'
import {Header} from './components/header.jsx'
import {Footer} from './components/Footer.jsx'
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
     <>
<div className="App">
<Header />
     <Body />
     <Footer />
</div>
     </>
    )
  }
}

export default App;
