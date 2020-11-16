import React from 'react'

import AddCryptoForm from '../AddCryptoForm'
import Cryptos from '../Cryptos'

import './index.scss'

export const Main = () => (
    <main className="main">
        <div className="main-add-cryptocurrency">
            <div className="main-add-cryptocurrency-left">
                <div className="main-add-cryptocurrency-title">
                    Now you can track<br/>all your cryptos here!
                </div>
                <div className="main-add-cryptocurrency-desc">
                    Just enter the<br/>cryptocurrency code on the<br/>form to the right
                </div>
            </div>
            <div className="main-add-cryptocurrency-right">
                <AddCryptoForm />
            </div>
        </div>
        <Cryptos />
    </main>
)