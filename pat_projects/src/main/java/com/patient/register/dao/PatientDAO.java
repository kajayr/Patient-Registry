package com.patient.register.dao;

import com.patient.register.entity.Patient;

import java.util.List;

public interface PatientDAO {
    List<Patient> findAll();
    Patient findById(int patientId);
    void saveOrUpdate(Patient patient);
    void deleteById(int patientId);
}
