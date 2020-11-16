import { useState } from 'react'
import { ICrypto } from '../models/Crypto'

export const useCryptos = () => {
    const [cryptos, setCryptos] = useState<ICrypto[]>([])

    const addCrypto = (crypto: ICrypto) => setCryptos([...cryptos, crypto])
    const removeCrypto = (name: string) => setCryptos(cryptos.filter((crypto: ICrypto) => crypto.name !== name))
    
    return { cryptos, addCrypto, removeCrypto }
}