import { gql } from "apollo-server-core";

const typeDefs = gql`
    type Query {
        users:[User!]!
        user(_id:ID!): User
        items:[Item!]!
        item(_id:ID!) : Item
        getUserForItem(purchasedBy:ID):[Item]
    }

    type User {
        _id:ID
        name:String
        email:String
        password:String,
        items:[Item]
    }
    type Item {
        _id:ID,
        itemName:String
        qty:String
        purchasedBy:ID,
    }

    input UserInput{
        name:String!
        email:String!
        password:String!
    }
    input UserSignIn{
        email:String!
        password:String!
    }
    type Data{
        data:String!
    }
    type Mutation{
        createUser(userInp:UserInput!) : User
        signInUser(userSignIn:UserSignIn!) : Data
        purchasedItem(itemName:String!,qty:String!):String
    }

`;

export default typeDefs