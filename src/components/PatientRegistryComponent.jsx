import React, { Component } from 'react'
import PatientDataService from '../service/patientsDataService';

class PatientRegistryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patients: []
        }
        this.refreshPatientRegistry = this.refreshPatientRegistry.bind(this)
        this.deletePatientClicked = this.deletePatientClicked.bind(this)
        this.upDatePatientClicked = this.upDatePatientClicked.bind(this)
        this.addPatientClicked = this.addPatientClicked.bind(this)
    }

    componentDidMount() {
        this.refreshPatientRegistry();
    }

    refreshPatientRegistry() {
        PatientDataService.getAllPatients()
        .then(
            response => {
                this.setState({
                    patients: response.data,
                })
            }
        )
    }

    deletePatientClicked(id, firstName, lastName) {
        console.log('Delete Patient Clicked')
        PatientDataService.deletePatient(id)
        .then(
            response => {
                this.setState({message: `Deleted Patient: ${firstName} ${lastName}`})
                alert(this.state.message)
                this.refreshPatientRegistry();
            }
        )
    }
    
    upDatePatientClicked(id, firstName) {
        console.log('Update Patient Clicked')
        this.props.history.push(`/patient/${id}/${firstName}`)
    }

    addPatientClicked() {
        console.log('Add Patient Clicked')
        this.props.history.push(`/thePatient/-1`)
    }
 
   render() {
       return(
           <div className="container">
               <h1 style={{textAlign:"center"}}>Patient Registry</h1><br/>
               <div className="jumbotron"  style={{backgroundColor: "gray", color: "white"}}>
                   <table className="table">
                       <thead>
                           <tr style={{textAlign: "center" , color: "black"}}>
                               <th>Id</th>
                               <th>First Name</th>
                               <th>Last Name</th>
                               <th>Age</th>
                               <th>Weight</th>
                               <th>Gender</th>
                               <th>Diagnosis</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.patients.map (
                                patients => 
                                   <tr style={{textAlign: "center"}} key={patients.id}>
                                       <td>{patients.id}</td>
                                       <td>{patients.firstName}</td>
                                       <td>{patients.lastName}</td>
                                       <td>{patients.age}</td>
                                       <td>{patients.weight}</td>
                                       <td>{patients.gender}</td>
                                       <td>{patients.diagnosis}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deletePatientClicked(patients.id, patients.firstName, patients.lastName)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDatePatientClicked(patients.id, patients.firstName)}>Update</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   <div className="row">
                   <div className="col-3 ">
                       </div>
                       <div className="col-6 text-center">
                       <button className="btn btn-primary" onClick={this.addPatientClicked}>Add Patient</button>
                       </div>
                       <div className="col-3">
                       </div>

                   </div>
               </div>
           </div>
       )
   } 
}

export default PatientRegistryComponent;
