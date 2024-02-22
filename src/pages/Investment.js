import React from 'react'
import Investmentheader from '../component/Investmentheader'
import ExploreInvestment from '../component/ExploreInvestment'
import InvestmentPortfolio from '../component/InvestmentPortfolio'

const Investment = () => {
    return (
        <>
            <Investmentheader />
            <InvestmentPortfolio/>
            <ExploreInvestment/>
        </>
    )
}

export default Investment