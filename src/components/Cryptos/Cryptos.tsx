import React, { useContext } from 'react'

import Crypto from './components/Crypto'
import { ICrypto } from '../../models/Crypto'
import { AppContext } from '../DataProvider/DataProvider'

import './index.scss'

export const Cryptos = () => {
  const { cryptos, removeCrypto } = useContext(AppContext)

  const onRemove = (name: string) => () => removeCrypto && removeCrypto(name)

  return (
    <div className="cryptos">
      {cryptos.map((crypto: ICrypto) => (
        <Crypto crypto={crypto} remove={onRemove(crypto.name)} key={crypto.name} />
      ))}
    </div>
  )
}
