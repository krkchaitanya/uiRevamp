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
     } = graphql;


// JSON file paths
const booksJsonFilePath = path.join(__dirname, '../MockData/Books.json');
const authorsJsonFilePAth = path.join(__dirname,'../MockData/Authors.json');


const booksJsonContent = JSON.parse(fs.readFileSync(booksJsonFilePath, 'utf-8'));
const authorsJsonContent = JSON.parse(fs.readFileSync(authorsJsonFilePAth, 'utf-8'));

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

const BookType = new GraphQLObjectType({
   name: 'Book',
   fields: () => ({
       id: {type: GraphQLID},
       name: {type: GraphQLString},
       genre: {type: GraphQLString},
       author: {
           type: AuthorType,
           resolve(parent, args) {
                return _.find(authorsJsonContent.authors, {id: parent.authorId});
           }
       }
   }) 
});

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(booksJsonContent.books, {authorId: parent.id});
            }
        }
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
                 return _.find(booksJsonContent.books, {id:args.id} );
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLString}},
            resolve(parent,args) {
                return _.find(authorsJsonContent.authors, {id:args.id});
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return booksJsonContent.books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authorsJsonContent.authors;
            }
        }
    }
}); 


module.exports = new GraphQLSchema({
    query: RootQuery
});