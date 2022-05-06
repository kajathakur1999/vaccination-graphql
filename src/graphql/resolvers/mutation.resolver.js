const { v4 } = require("uuid");
const PatientModel = require("../../model/patient.model");
const AdministerModel = require("../../model/administer.model");

module.exports = {
    createPatient: async (args) => {
        try{
            const newPatient = new PatientModel(args.data);
            const createdPatient = await newPatient.save();
            return {...createdPatient._doc, id:createdPatient._id }
        }catch(error){
            throw new Error(error);
        }
    },

    createAdminister : async ({data}) => {
        try {
            const {name, DOB, vaccine, dateAdministered, brand, hospital, age, dueDate, complete} = data;
            const newAdminister = new AdministerModel({name, DOB, vaccine, dateAdministered, brand, hospital, age, dueDate, complete});
            const createAdminister = await newAdminister.save();
            return{...createAdminister._id, id: createAdminister._doc._id}
        } catch (error) {
            throw new Error(error);
        }
    }
}