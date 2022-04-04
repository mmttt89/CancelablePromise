import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cancelablePromise from "../../lib/cancelablePromise";

const FetchDataWithCancelablePromise = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos')

        const cancelable = cancelablePromise(todosPromise);
        cancelable.promise
            .then(result => result.json())
            .then(todosData => setTodos(todosData))
            .catch(({ isCanceled, ...error }) => console.log('isCanceled', isCanceled));

        return () => {
            cancelable.cancel()
        }
    }, [])

    return (
        <div>
            <h4>
                With Cancelable Promise
            </h4>
            <p>
                to see the effect click on fetch data and then go to

                <button>Get Data</button>

                <Link to={"/next-page"}>
                    <strong>next page</strong>
                </Link>
            </p>
            
            <h4>Todos {todos.length}</h4>
            {
                todos.map((item, index) => {
                    <div key={index.toString()}>{item?.id}</div>
                })
            }

        </div>
    )
}

export default FetchDataWithCancelablePromise