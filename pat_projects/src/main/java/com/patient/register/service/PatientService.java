package com.patient.register.service;

import com.patient.register.entity.patient;

import java.util.List;

public interface PatientService {
    List<patient> findAll();
    patient findById(int patientId);
    void saveOrUpdate(patient patient);
    void deleteById(int patientId);
}
