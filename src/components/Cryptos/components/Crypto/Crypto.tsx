import React, { FC } from 'react'

import icon from './assets/icon.svg'
import { ICrypto, Currency } from '../../../../models/Crypto'
import { formatPrice } from './utils'

import './index.scss'

interface IProps extends ICrypto {
    remove: () => void
}

export const Crypto: FC<IProps> = ({ name, price, currencySymbol = Currency.EUR, remove }) => {

    return (
        <div className="crypto">
            <img src={icon} alt="" />
            <div className="crypto-details">
                <div className="crypto-name">{name}</div>
                <div className="crypto-price">{formatPrice(price, currencySymbol)}</div>
            </div>
            <div className="crypto-cross-icon" onClick={remove}>✕</div>
        </div>
    )
}