const path = require("path");
const axios = require("axios");
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLSchema
     } = require("graphql");

// LaunchType
const LaunchType = new GraphQLObjectType({
    name: "Launch",
    fields: () => ({
        flight_number: {type: GraphQLInt},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        flight_number: {type: GraphQLInt},
        rocket:{ type: RocketType}
    })
});

// RocketType
const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString}
    })
});

// RootQuery
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        launch: {
            type: new GraphQLList(LaunchType),
            args: {flight_number: {type: GraphQLInt}},
            resolve(parent, args){
                // spacex api to fetch flights and rocket info
                const flightInfoHandler = () => {
                    return axios.get("https://api.spacexdata.com/v3/launches");
                };
                return flightInfoHandler().then(flights => flights.data
                    .filter(flight => flight.flight_number === args.flight_number));
            }
        },
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios.get("https://api.spacexdata.com/v3/launches")
                .then(res => res.data)
                .catch(error => error);
            }
        },
        rocket: {
            type: new GraphQLList(RocketType),
            args: {rocket_id: {type: GraphQLString}},
            resolve(parent, args) {
                const rocketHandler = () => {
                    return axios.get("https://api.spacexdata.com/v3/rockets");
                }
                return rocketHandler().then(rockets => rockets.data
                    .filter(rocket => rocket.rocket_id === args.rocket_id));
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve(parent, args) {
                return axios.get("https://api.spacexdata.com/v3/rockets")
                .then(res => res.data)
                .catch(error => error);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});