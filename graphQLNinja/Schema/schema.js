const graphql = require('graphql');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLSchema
     }= graphql;


// JSON file paths
const bookFilePath = path.join(__dirname, '../MockData/Books.json');

const booksJsonDataPromise = () => {
    return new Promise((resolve,reject) => {
        fs.readFile(bookFilePath, {encoding: 'utf-8'}, (error, booksData) => {
            if(!error){
                resolve(booksData);
            } else {
                reject(error);
            }
        });
    });
};
 
const finalResult = booksJsonDataPromise().then((booksContent) => {
    console.log(booksContent);
    return booksContent
});

console.log('--finalResult--', finalResult);

const BookType = new GraphQLObjectType({
   name: 'Book',
   fields: () => ({
       id: {type: GraphQLID},
       name: {type: GraphQLString},
       genre: {type: GraphQLString}
   }) 
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            // resolve function is used to fetch data from DB or other sources
            resolve(parent,args) {
                return _.find(finalResult, {books: {id: args.id}});
            }
        }
    }
}); 


module.exports = new GraphQLSchema({
    query: RootQuery
});