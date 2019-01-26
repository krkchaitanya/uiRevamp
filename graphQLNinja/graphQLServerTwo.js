const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
//  Event constructor
const Event = require("./mongoModals/events");
const UserModal = require("./mongoModals/user");

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

    type User {
        email: String!
        password: String
    }

    input UserInput {
        email: String!
        password: String!
    }

    type Query {
        events: [Event!]!
        userInfo: [User!]!
    }

    type Mutation {
        createEvent(eventInput: EventInput): Event
        createUser(userInput: UserInput): User
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
    },

    createUser: (args) => {
        return UserModal.findOne({email: args.userInput.email})
        .then((user) => {
            if(user){
                throw new Error('User alredy exists');
            }
            return bcrypt
            .hash(args.userInput.password, 12)
        })
            .then(hashedPassword => {
                const user = new UserModal({
                    email: args.userInput.email,
                    password: hashedPassword
                });
                return user.save();
            })
            .then(res => {
                console.log(res.data);
                return { ...res._doc, password:null,_id: res._id };
            })
            .catch(error => {
                throw error
            });
    },

    userInfo: () => {
        return UserModal.find()
        .then(userinfoArr => {
            userinfoArr.map(userEle => {
                return {...userEle._doc};
            });
        })
        .catch(error => {
            console.log(error);
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