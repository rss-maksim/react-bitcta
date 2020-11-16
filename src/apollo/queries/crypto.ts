import { gql } from '@apollo/client'

export const GET_CRYPTO_PRICE = gql`
    query price($crypto: String, $currency: String) {
        markets(filter:{ baseSymbol: {_eq:$crypto} quoteSymbol: {_eq:$currency} marketStatus: { _eq: Active }}) {
        marketSymbol
        ticker {
            lastPrice
          }
        }
    } 
`;
