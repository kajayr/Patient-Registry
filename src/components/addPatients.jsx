import React, {Component} from 'react'
import PatientDataService from '../../service/patientDataService'

class AddPatient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            age : '',
            weight: '',
            gender: '',
            diagnosis: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let patient = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            weight: this.state.weight,
            gender: this.state.gender,
            diagnosis: this.state.diagnosis
        }
        PatientDataService.createPatient(patient)
            .then(this.props.history.push(`/patientRegistry`))
    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Add Patient</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>ID:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled/>
                        </div>
                        <div>
                            <label>Firstname:</label>
                            <input className="form-control" type="text" name="firstName" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Lastname:</label>
                            <input className="form-control" type="text" name="lastName" onChange={this.handleChange}/>
                        </div>       
                        <div>
                            <label>Age:</label>
                            <input className="form-control" type="text" name="age" onChange={this.handleChange}/>
                        </div>      
                        <div>
                            <label>Weight:</label>
                            <input className="form-control" type="text" name="weight" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Gender:</label>
                            <input className="form-control" type="text" name="gender" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Diagnosis:</label>
                            <input className="form-control" type="text" name="diagnosis" onChange={this.handleChange}/>
                        </div>
                    
                        <br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form><br/><br/>
                </div>
            </div>
        )
    }
}

export default AddPatient
