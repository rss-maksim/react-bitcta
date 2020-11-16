import React, { createContext, FC, PropsWithChildren, useState } from 'react'

import { ICrypto } from '../../models/Crypto'

interface IProps {}

export interface IAppContext {
    cryptos: ICrypto[]
    addCrypto?: (name: ICrypto) => void
    removeCrypto?: (name: string) => void
}

export const AppContext = createContext<IAppContext>({ cryptos: [] })

export const DataProvier: FC<PropsWithChildren<IProps>> = ({ children }) => {
    const [cryptos, setCryptos] = useState<ICrypto[]>([])

    const addCrypto = (crypto: ICrypto) => setCryptos([...cryptos, crypto])
    const removeCrypto = (name: string) => setCryptos(cryptos.filter((crypto: ICrypto) => crypto.name !== name))

    const value = { cryptos, addCrypto, removeCrypto }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
