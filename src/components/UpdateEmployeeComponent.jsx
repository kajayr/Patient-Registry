import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import PatientDataService from '../service/patientsDataService';

class UpdatePatientComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: this.props.match.params.firstName,
            lastName: '',
            age : '',
            weight: '',
            gender: '',
            diagnosis: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let patient = {
            id: this.state.id,
            firstName: values.firstName,
            lastName: values.lastName,
            age: values.age,
            weight: values.weight,
            gender: values.gender,
            diagnosis: values.diagnosis,
        }
        PatientDataService.updatePatient(patient)
            .then(() => this.props.history.push('/PatientRegistry'))
    }

    render() {
        let {id, firstName, lastName, age, weight, gender, diagnosis} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Update Patient</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{id, firstName, lastName, age, weight, gender, diagnosis}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            () => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>First Name</label>
                                        <Field className="form-control" type="text" name="firstName" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Last Name</label>
                                        <Field className="form-control" type="text" name="lastName" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Age</label>
                                        <Field className="form-control" type="text" name="age" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Weight</label>
                                        <Field className="form-control" type="text" name="weight" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Gender</label>
                                        <Field className="form-control" type="text" name="gender" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Diagnosis</label>
                                        <Field className="form-control" type="text" name="diagnosis" />
                                    </fieldset>
                                    <br/>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        } 
                    </Formik><br/><br/>
                </div>
            </div>
        )
    }
}

export default UpdatePatientComponent
