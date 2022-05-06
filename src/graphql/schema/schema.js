const { buildSchema } = require("graphql");
module.exports = buildSchema(`
    type Query {
        hello : String!
        patients : [ Patient! ]!
        administers : [Administer !]!
        patientName(search : FindPatientInput) : Patient!
    }
    type Mutation {
        createPatient(data : CreatePatientInput) : Patient!
        createAdminister(data : CreateAministerInput) : Administer!
    }
    input FindPatientInput{
        name : String!
    }
    input CreateAministerInput{
      name : String!
      dateOfBirth : String!
      vaccine : String!
      dateAdministered : String!
      brand : String
      hospital : String
      age : Int
      dueDate : String
      complete : String
    }
    input CreatePatientInput {
        name : String!
        dateOfBirth : String!
        gender : String!
        placeOfBirth : String!
        BloodGrp : String!
        height : Int
        weight : Int
    }
    type Patient {
        id : ID!
        name : String!
        dateOfBirth : String!
        gender : String!
        placeOfBirth : String!
        BloodGrp : String!
        height : Int
        weight : Int
    }
    type Administer{
        id : ID!
        name : String!
        age : Int
        dateOfBirth : String!
        dueDate : String
        vaccine : String!
        dateAdministered : String!
        brand : String
        hospital : String
        complete : String
    }
`);