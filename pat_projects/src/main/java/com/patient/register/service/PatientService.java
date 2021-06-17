package com.patient.register.service;

import com.patient.register.entity.Patient;

import java.util.List;

public interface PatientService {
    List<Patient> findAll();
    Patient findById(int patientId);
    void saveOrUpdate(Patient patient);
    void deleteById(int patientId);
}
