
const Controllers = {
    async registerPatient(req, res, next) {
        res.status(200).json({
            success: true,
            passed: true
        })
    }
}

module.exports = Controllers;