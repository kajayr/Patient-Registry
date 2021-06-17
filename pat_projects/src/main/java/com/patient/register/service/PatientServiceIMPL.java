package com.patient.register.service;

import com.patient.register.dao.PatientDAO;
import com.patient.register.entity.Patient;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PatientServiceIMPL implements PatientService{
    private final PatientDAO partDAO;

    @Autowired
    public PatientServiceIMPL(PatientDAO partDAO){this.partDAO = partDAO;}

    @Override
    public List<Patient> findAll() {return partDAO.findAll();}

    @Override
    public Patient findById(int patientId){return partDAO.findById(patientId);}

    @Override
    public void saveOrUpdate(Patient patient){partDAO.saveOrUpdate(patient);};

    @Override
    public void deleteById(int patientId){partDAO.deleteById(patientId);};
}
