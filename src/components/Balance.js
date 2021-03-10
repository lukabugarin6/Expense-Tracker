import React , { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc += item), 0);

    const sign = total < 0 ? "-" : "";

    return (
        <div className='inline-flex flex-col gap-x-1  items-center text-center font-medium text-3xl bg-tertiary rounded-lg w-full mx-auto py-2'>
            <h1 className='text-xl md:text-2xl'>Your Balance : </h1>

            {' '}
            <span className='text-2xl md:text-3xl font-bold block'> {sign}${Math.abs(total).toFixed(2)}</span>
        </div>
    )
}
