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

    }
}

module.exports = Controllers;