const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./Schema/schema');

// Initialize App
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(7677, () => {
    console.log(' ->> App is running on port 7677');
});