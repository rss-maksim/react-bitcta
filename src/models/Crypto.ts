export interface ICrypto {
    name: string
    price: string
    currencySymbol?: Currency
}

export enum Currency {
    EUR = '€',
    USD = '$'
}