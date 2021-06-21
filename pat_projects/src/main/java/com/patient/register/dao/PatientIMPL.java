package com.patient.register.dao;

import com.patient.register.entity.patient;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class PatientIMPL implements PatientDAO {
    private final EntityManager entityManager;

    @Autowired
    public PatientIMPL(EntityManager entityManager){this.entityManager = entityManager;}

    @Override
    @Transactional
    public List<patient> findAll()
    {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<patient> myQuery = currentSession.createQuery("from patient");
        return myQuery.getResultList();
    }

    @Override
    @Transactional
    public patient findById(int patientId)
    {
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.get(patient.class, patientId);
    }

    @Override
    @Transactional
    public void saveOrUpdate(patient patient)
    {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(patient);
    }

    @Override
    @Transactional
    public void deleteById(int patientId)
    {
        Session currentSession = entityManager.unwrap(Session.class);
        patient patient = currentSession.get(com.patient.register.entity.patient.class, patientId);
        currentSession.delete(patient);
    }
}
