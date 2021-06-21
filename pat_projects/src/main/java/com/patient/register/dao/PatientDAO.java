package com.patient.register.dao;

import com.patient.register.entity.patient;

import java.util.List;

public interface PatientDAO {
    List<patient> findAll();
    patient findById(int patientId);
    void saveOrUpdate(patient patient);
    void deleteById(int patientId);
}
