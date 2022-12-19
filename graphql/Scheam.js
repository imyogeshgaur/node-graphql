import { gql } from "apollo-server-core";

const typeDefs = gql`
    type Query {
        users:[User!]!
        user(id:ID!): User
        items:[Item!]!
        item(itemid:ID!) : Item
    }

    type User {
        id:ID
        name:String
        email:String
        password:String,
        items:[Item]
    }
    type Item {
        itemid:ID,
        itemName:String
        qty:Int
        purchasedBy:ID,
    }

    input UserInput{
        name:String!
        email:String!
        password:String!
    }
    type Mutation{
        createUser(userInp:UserInput!) : User
    }

`;

export default typeDefs