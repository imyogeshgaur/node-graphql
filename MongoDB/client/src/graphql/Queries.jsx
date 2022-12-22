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
query getAUser{
  user(_id:"63a137a2fa14528a85127a76"){
    name
    email
    items{
      itemName
      qty
    }
  }
}
`