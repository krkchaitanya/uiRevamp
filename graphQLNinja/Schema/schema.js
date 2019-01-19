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

const booksJsonContent = JSON.parse(fs.readFileSync(bookFilePath, 'utf-8'));
console.log('Mocked booksJsonData fetched -> ', booksJsonContent.books);

// const booksJsonDataPromise = () => {
//     return new Promise((resolve,reject) => {
//         fs.readFile(bookFilePath, {encoding: 'utf-8'}, (error, booksData) => {
//             if(!error){
//                 resolve(JSON.parse(booksData));
//             } else {
//                 reject(error);
//             }
//         });
//     });
// };


const books = 
    [ { name: 'Name of the Wind', genre: 'Fantasy', id: "1" },
      { name: 'The Final Empire', genre: 'Fantasy', id: "2" },
      { name: 'The Long earth', genre: 'SCI-FI', id: "3" } ];

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
            args: {id: {type: GraphQLString}},
            // resolve function is used to fetch data from DB or other sources
            resolve(parent,args) {
                console.log('hitting resolve function...');
                 return _.find(booksJsonContent.books, {id:args.id} );
            }
        }
    }
}); 


module.exports = new GraphQLSchema({
    query: RootQuery
});