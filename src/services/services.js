const pool_query = require('../db/dbPool');


const Services = {
    findPsychiatrist(psych_id){
        return pool_query(`SELECT * FROM PSYCHIATRIST WHERE psych_id=${psych_id}`);
    },
    registerPatient(patient_name, patient_address, patient_email, patient_password, patient_phone, patient_photo, psych_id){
        return pool_query(`INSERT INTO PATIENT VALUES (NULL, ${patient_name}, ${patient_email}, ${patient_phone}, ${patient_password}, ${patient_photo}, ${psych_id}, ${patient_address})`)
    }
}