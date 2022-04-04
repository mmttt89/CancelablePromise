import React from 'react'
import FetchDataWithCancelablePromise from '../../components/FetchDataWithCancelable'
import FetchDataWithOutCancelablePromise from '../../components/FetchDataWithOutCancelable'

const Home = () => {
    return (
        <div>
            <h4>
                Home Page
            </h4>
            <FetchDataWithCancelablePromise />
            <p>----------------------</p>
            <FetchDataWithOutCancelablePromise />
        </div>
    )
}

export default Home