import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { client } from './apollo/constructor'
import DataProvier from './components/DataProvider'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <DataProvier>
        <App />
      </DataProvier>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
