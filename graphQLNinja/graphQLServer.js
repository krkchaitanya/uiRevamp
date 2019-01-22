const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./Schema/schema');
const spacexSchema = require('./Schema/spacexSchema');

// Initialize App
const app = express();

app.use('/graphql', graphqlHTTP({
    schema: spacexSchema,
    graphiql: true
}));

// when we deploy the application on any platform like heroku it utilizes the env.port
const port = process.env.PORT || 7677;

app.listen(port, () => {
    console.log(' ->> GraphQL server is running on port /--7677--/');
});