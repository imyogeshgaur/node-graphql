import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
const token = document.cookie.split('=')[1];
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const newClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  headers:{
    'Content-Type':'application/json',
     'authorisation':token || undefined
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={newClient}>
      <App/>
    </ApolloProvider>
  </BrowserRouter>,
)
