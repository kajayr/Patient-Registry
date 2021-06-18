import React from 'react'
import {Header} from './components/header.jsx'
import {Footer} from './components/Footer.jsx'
import {Home} from './components/Home.jsx'
import { BrowserRouter, Route, Switch} from 'react-router-dom' ;
import AddPatient from './components/addPatients'
import UpdatePatientComponent from './components/UpdatePatientComponent'
import PatientRegistryComponent from './components/PatientRegistryComponent'
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

                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>                       
                        <Route path="/thePatient/:id" component={AddPatient} />
                        <Route path="/patient/:id/:jobTitle" component={UpdatePatientComponent} />
                        <Route exact path="/patientRegistry" component={PatientRegistryComponent} />
                    </Switch>
                    <Footer />
</BrowserRouter>
    )
  }
}

export default App;
