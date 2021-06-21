package com.patient.register.service;

import com.patient.register.dao.PatientDAO;
import com.patient.register.entity.patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceIMPL implements PatientService{
    private final PatientDAO partDAO;

    @Autowired
    public PatientServiceIMPL(PatientDAO partDAO){this.partDAO = partDAO;}

    @Override
    public List<patient> findAll() {return partDAO.findAll();}

    @Override
    public patient findById(int patientId){return partDAO.findById(patientId);}

    @Override
    public void saveOrUpdate(patient patient){partDAO.saveOrUpdate(patient);};

    @Override
    public void deleteById(int patientId){partDAO.deleteById(patientId);};
}
