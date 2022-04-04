import React from 'react'
import { Link } from 'react-router-dom'

const NextPage = () => {
    return (
        <div>
            Hi, this is next page open hit <noscript> <strong>F12</strong></noscript>
            <b>
                If you clicked on fetch data without cancelale promise you must see a warrning or error
            </b>
            <br />

            otherwise nothing you should see nothing and everything works fine


            <Link to={"/"} >Home</Link>
        </div>
    )
}

export default NextPage
