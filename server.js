import express, { urlencoded } from "express";
const app = express();
import {ApolloServer} from 'apollo-server'
import typeDefs from "./graphql/Scheam.js";
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import resolvers from "./graphql/resolvers.js"
import connectToDB from "./database/connection.js";
import dcryptUser from "./helper/helpers.js";

app.use(express.json())
app.use(urlencoded({extended:true}))
connectToDB()

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context:({req})=>{
        const {authorisation} = req.headers;
        if(!authorisation){
          throw new Error("Not Authorized !!!")
        }else{
          const userId = dcryptUser(authorisation);
          return {userId}
        }
    },
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})