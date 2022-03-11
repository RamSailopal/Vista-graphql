const express = require('express')
const expressGraphQL = require('express-graphql')
const axios = require('axios')
const db = require('monk')('newUser:Test123@mongo:27017/patients')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')

function GetPatients() {
   const json =  axios.get('http://nodevista:9000/fmqlEP?fmql=DESCRIBE%202%20LIMIT%201000').then((response) => response.data.results);
   return json;
}

function GetPatients1() {
   const patients=db.get("patient_info")
   const json=patients.find({}).then((response) => response);
   return json 
   
}

function GetPatient1(name) {
   const patients=db.get("patient_info")
   const json=patients.find({ "name.value":name }).then((response) => response);
   return json

}


function GetPatient(name) {
   const json =  axios.get('http://nodevista:9000/fmqlEP?fmql=DESCRIBE%202%20FILTER(.01=%22' + name + '%22)').then((response) => response.data.results);
   return json;
}


const app = express()

const PatientType = new GraphQLObjectType({
  name: 'Patient',
  description: 'This represents a patient from Vista',
  fields: () => ({
    name: { type: NameType  },
    sex: { type: SexType  },
    date_of_birth: { type: DobType  },
    place_of_birth_city: { type: PlaceofBirthCityType  },
    place_of_birth_state: { type: PlaceofBirthStateType  },
    patients: {
       type: PatientType,
       resolve: patients => patients.map(GetPatients),
    }
  })
})

const NameType = new GraphQLObjectType({
  name: 'Name',
  description: 'This represents the name fields',
  fields: () => ({
     value: {type: GraphQLString}
 })
})

const DobType = new GraphQLObjectType({
  name: 'date_of_birth',
  description: 'This represents the date of birth fields',
  fields: () => ({
     value: {type: GraphQLString}
 })
})

const PlaceofBirthCityType = new GraphQLObjectType({
  name: 'place_of_birth_city',
  description: 'This represents the place of birth city fields',
  fields: () => ({
     value: {type: GraphQLString}
 })
})

const PlaceofBirthStateType = new GraphQLObjectType({
  name: 'place_of_birth_state',
  description: 'This represents the place of birth state fields',
  fields: () => ({
     sameAsLabel: {type: GraphQLString}
 })
})


const SexType = new GraphQLObjectType({
  name: 'Sex',
  description: 'This represents the sex fields',
  fields: () => ({
     value: {type: GraphQLString}
 })
})


const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    patients: {
      type: new GraphQLList(PatientType),
      description: 'List of All Patients',
      resolve: GetPatients 
    },
    patients1: {
      type: new GraphQLList(PatientType),
      description: 'List of All Patients',
      resolve: GetPatients1
    },

    patient: {
      type: new GraphQLList(PatientType),
      description: 'Get one patient',
      args: {
         name: { type: GraphQLString }
      },
      resolve: (parent, args) => GetPatient(args.name)
    },
    patient1: {
      type: new GraphQLList(PatientType),
      description: 'Get one patient',
      args: {
         name: { type: GraphQLString }
      },
      resolve: (parent, args) => GetPatient1(args.name)
    },

    
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))
app.listen(5000, () => console.log('Server Running'))
//})
