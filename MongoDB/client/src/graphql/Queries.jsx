import { gql } from "@apollo/client"

export const GET_ALL_USERS = gql`
query getAllUsers{
  users{
    _id
    name
    email
    items{
      itemName
      qty
    }
  }
}
`
export const GET_A_USER = gql`
query getAUser($_id:ID!){
  user(_id:$_id){
    name
    email
    items{
      itemName
      qty
    }
  }
}
`
