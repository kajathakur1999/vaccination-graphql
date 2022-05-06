const PatientModel = require("../../model/patient.model");
const AdministerModel = require("../../model/administer.model");

module.exports = {
    patients : async () => {
        try {
            const patients = PatientModel.find();
            return patients;
        } catch (error) {
            throw new Error(error)
        }
    },

    administer : async () => {
        try {
            const adminiters = await AdministerModel.find().populate("name");
            return adminiters;
        } catch (error) {
            throw new Error(error)
        }
    }
}