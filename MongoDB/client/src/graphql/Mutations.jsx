import { gql } from "@apollo/client"

export const SIGN_UP_USER = gql`
mutation createUser($userInp:UserInput!){
    createUser(userInp:$userInp){
      name
      email
    }
  }
`

export const SIGN_IN_USER = gql`
mutation signInUser($userSignIn:UserSignIn!){
  signInUser(userSignIn:$userSignIn){
  	data
  }
}
`

export const ADD_ITEM = gql`
mutation {
  purchasedItem(itemName:String!,qty:String!):String
}

`