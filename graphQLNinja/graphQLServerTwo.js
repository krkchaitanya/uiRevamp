const express = require("express");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
//  Event constructor
const Event = require("./mongoModals/events");

const app = express();

// Middlewares
app.use(bodyParser.json());

var schema = buildSchema(`
    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
    }

    input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
    }

    type RootQuery {
        events: [Event!]!
    }

    type RootMutation {
        createEvent(eventInput: EventInput): Event
    }
`);

var root = {
    events: () => {
        return Event
        .find()
        .then(events => {
            return events.map(event =>{
                return {...event._doc};
            }); 
        })
        .catch(error => {
            console.log(error);
        });       
    },

    createEvent: (args) => {
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: args.eventInput.price,
            date: new Date(args.eventInput.date)
        });
        return event
        .save()
        .then(result => {
            console.log(result);
            return {...result._doc};
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
    }
  };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.get("/", (req,res) => {
    res.send("..Basic route implemented here..");
});

mongoose.connect("mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@projectz-f61na.mongodb.net/"+process.env.MONGO_DB+"?retryWrites=true")
.then(() => {
    app.listen(7678, () => {
        console.log(' --> graphQLServerTwo is running on port /--7678--/ ');
    });
})
.catch((mongoDBConnectionError) => {
    console.warn(mongoDBConnectionError);
});