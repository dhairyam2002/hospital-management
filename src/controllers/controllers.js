const cloudinary = require('../utils/uploadImages');
const Services = require('../services/services');

const Controllers = {
    async registerPatient(req, res, next) {

        try{
            let {patient_name, patient_email, patient_password, patient_phone, patient_address, psych_id} = req.body;

            console.log(req.file);

            const file = req.file;

            const [psych, metadata] = await Services.findPsychiatrist(psych_id);
            if(psych.length === 1){

                const result = await cloudinary.uploader.upload(file.path);

                console.log(result);

                psych_id = parseInt(psych_id);

                const [patient, metadata] = await Services.registerPatient(patient_name, patient_email, patient_address, patient_password, patient_phone, result.secure_url, psych_id);

                if(patient){
                    return res.status(200).json({
                        success: true,
                        message: "User successfully added"
                    })
                }
            }

            res.status(200).json({
                success: false,
                message: "No such psychiatrist exist!"
            })

        }catch (error) {
            if(error.original && error.original.errno === 1062){
                return res.status(400).json({
                    success: false,
                    message: "Duplicate entries! email or phone already used!"
                })
            }
            res.json({
                success: false,
                message: error.message
            })
        }

    },


    async getPsychiatrist(req, res, next){
        try {
            const hospitalId = req.query.hospitalId;

            if(!hospitalId){
                return res.status(400).json({
                    success: false,
                    message: "Bad request! hospitalId missing in query"
                })
            }

            const [hospital, metadatah] = await Services.getHospitals(hospitalId);
            
            if(hospital.length === 0){
                return res.status(204).json({
                    success: false,
                    message: "No such hospital entry!"
                })
            }

            const [psych, metadatapsych] = await Services.getPsychiatristsByHospitalId(hospitalId);



            const psychiatrist_details = [];
            let patients_count = 0;

            for(var i = 0; i < psych.length; i++){
                const [patients, metadatapat] = await Services.getPatientsByPsych(psych[i].psych_id);
                patients_count += patients.length;
                const obj = {
                    id: psych[i].psych_id,
                    name: psych[i].psych_name,
                    patients: patients
                }
                
                psychiatrist_details.push(obj);
            }

            let response = {
                hospital_name: hospital[0].name,
                total_psychiatrists: psych.length,
                total_patients: patients_count,
                psychiatrist_details: psychiatrist_details
            }


            return res.status(200).json({
                success: true,
                data: response
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}

module.exports = Controllers;