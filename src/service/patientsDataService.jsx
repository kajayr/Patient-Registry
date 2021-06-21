import axios from 'axios'

class PatientDataService {
    
    getAllPatients() {
        return axios.get(`http://localhost:8080/retrieveAllPatients`);
    }
    
    deletePatient(id) {
        return axios.delete(`http://localhost:8080/deletePatient/${id}`)
    }

    updatePatient(patient) {
        return axios.put(`http://localhost:8080/updatePatient/`, patient)
    }

    createPatient(patient) {
        return axios.post(`http://localhost:8080/addPatient/`, patient)
    }
}

export default new PatientDataService()