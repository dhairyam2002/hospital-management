const sequelize = require('../db/dbPool');


const Services = {

    findPsychiatrist(psych_id){
        return sequelize.query(`SELECT * FROM PSYCHIATRIST WHERE psych_id=${psych_id}`);
    },

    registerPatient(patient_name, patient_email, patient_address, patient_password, patient_phone, patient_photo, psych_id){
        return sequelize.query(`INSERT INTO PATIENT VALUES (NULL, "${patient_name}", "${patient_email}", "${patient_address}", "${patient_phone}", "${patient_password}", "${patient_photo}", ${psych_id})`)
    },

    getPsychiatristsByHospitalId(hospitalId){
        return sequelize.query(`SELECT * FROM PSYCHIATRIST WHERE hospital_id=${hospitalId}`);
    },


    getHospitals(hospital_id){
        return sequelize.query(`SELECT DISTINCT * FROM HOSPITAL WHERE hospital_id=${hospital_id}`);
    },

    getPatientsByPsych(psych_id){
        return sequelize.query(`SELECT * FROM PATIENT WHERE psych_id=${psych_id}`);
    }
}

module.exports = Services