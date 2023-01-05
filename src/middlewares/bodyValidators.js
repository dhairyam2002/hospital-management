const validator = require('validator')

function validateString(variable){
    if(typeof variable === "string") return true;
    return false;
}
exports.validateBody = async  (req, res, next) => {
    try{
        const body = req.body;
        console.log(body);
        console.log('here');
        console.log(!body.patient_name);
        if(!body.patient_name || !body.patient_address || !body.patient_email || !body.patient_phone || !body.patient_password){
            return res.status(422).json({
                success: false,
                message: "Unprocesseble input fields!",
                data: {}
            })
        }
        if(!validateString(body.patient_email) || !validateString(body.patient_name) || !validateString(body.patient_password) || !validateString(body.patient_address) || !validateString(body.patient_phone)){
            return res.status(422).json({
                success: false,
                message: "Unprocesseble input fields!",
                data: {}
            })
        }
        console.log(body);
        console.log('here');
        if(!validator.isEmail(body.patient_email)){
            return res.status(422).json({
                success: false,
                message: "Please enter valid email type!",
                data: {}
            })
        }

        if(body.patient_address.length < 10){
            return res.status(422).json({
                success: false,
                message: "Address should be at least 10 characters",
                data: {}
            })
        }

        const password = body.patient_password;
        let regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$")
        console.log(regex);
        console.log(password);
        if(!regex.test(password)){
            return res.status(422).json({
                success: false,
                message: "Password should contain atleast one upper case letter, at least one lower case letter, at least one digit and length should be between 8 to 15",
                data: {}
            })
        }
        const phone = body.patient_phone;
        regex = new RegExp("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$");
        console.log(regex.test(phone))
        if(!regex.test(phone)){
            return res.status(422).json({
                success: false,
                message: "Enter valid phone number!",
                data: {}
            })
        }

        if(!req.file){
            return res.status(422).json({
                success: false,
                message: "Please send images!",
                data: {}
            })
        }

        const filename = req.file.filename;
        const ext = filename.split('.').pop();
        if(ext !== "jpg" && ext !== "jpeg" && ext !== "png"){
            return res.status(422).json({
                success: false,
                message: "Only jpg jpeg and png supported",
                data: {}
            })
        }

        next();
    }catch (error){
        res.status(200).json({
            success: false,
            error: error.message
        })
    }
}