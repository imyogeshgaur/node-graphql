import {ApolloServer} from 'apollo-server'
import typeDefs from "./graphql/Scheam.js";
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import resolvers from "./graphql/resolvers.js"
import connectToDB from "./database/connection.js";
import context from "./middleware/authorization.js";

connectToDB()

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})