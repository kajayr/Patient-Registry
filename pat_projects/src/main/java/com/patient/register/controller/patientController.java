package com.patient.register.controller;

import com.patient.register.entity.Patient;
import com.patient.register.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class patientController {
    private final PatientService patientService;

    @Autowired
    public patientController(@Qualifier("patientServiceIMPL")PatientService patientService){this.patientService = patientService;}

    @GetMapping("/retrieveAllPatients")
    public List<Patient> findAll(){
        return patientService.findAll();
    }

    @GetMapping("/retrievePatient/{patientId}")
    public Patient getPatient(@PathVariable int patientId){
        return patientService.findById(patientId);
    }

    @PostMapping("/addPatient")
    public Patient addPatient(@RequestBody Patient patient)
    {
        patient.setId(0);
        patientService.saveOrUpdate(patient);
        return patient;
    }

    @PutMapping("/updatePatient")
    public Patient updatePatient(@RequestBody Patient patient)
    {
        patientService.saveOrUpdate(patient);
        return patient;
    }

    @DeleteMapping("/deletePatient/{patientId}")
    public String deletePatient(@PathVariable int patientId)
    {
        patientService.deleteById(patientId);
        return "Delete patient id: " + patientId;
    }
}