import React, { useState, ChangeEvent, FormEvent, useContext } from 'react'
import { useApolloClient } from '@apollo/client'
import cn from 'classnames'

import { GET_CRYPTO_PRICE } from '../../apollo/queries/crypto'
import { AppContext } from '../DataProvider/DataProvider'
import { ICrypto } from '../../models/Crypto'

import './index.scss'

const currency = 'EUR'

export const AddCryptoForm = () => {
    const [crypto, setCrypto] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [isCryptoExists, setIsCryptoExists] = useState<boolean>(true)
    const { cryptos, addCrypto } = useContext(AppContext)
    const client = useApolloClient()

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => setCrypto(event.target.value)
    const onSubmitHandle = async (event: FormEvent) => {
        event.preventDefault()
        try {
            setDisabled(true)
            const { data, error } = await client.query({
                query: GET_CRYPTO_PRICE,
                variables: { crypto, currency }
              })
            if (error) {
                setError(!!error)
            }
            const cryptoExists = data?.markets?.length > 0
            setIsCryptoExists(cryptoExists)
            if (cryptoExists) {
                const hasCrypto = Boolean(cryptos.find(({ name }: ICrypto) => name === crypto))
                const price = data?.markets[0]?.ticker?.lastPrice
                if (!hasCrypto && price > 0) {
                    addCrypto && addCrypto({ name: crypto, price })
                }
            }
        } catch(error) {
            console.error(error)
        } finally {
            setDisabled(false)
        }
    }
    
    return (
        <div className="crypto-form">
            <form onSubmit={onSubmitHandle}>
                <div className="crypto-form-input-container">
                    <div className={cn('crypto-form-input-wrapper', { error })}>
                        <input className="crypto-form-input" type="text" value={crypto} onChange={onChangeHandle} disabled={disabled} />
                    </div>
                    {!isCryptoExists && <div className="crypto-form-not-exist-text">There is no crypto</div>}
                </div>

                <button type="submit" className="crypto-form-submit-btn">Add</button>
            </form>

            <div className="crypto-form-terms">
                Use of this service is subject to terms and conditions.
            </div>
        </div>
    )
}