import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cancelablePromise from "../cancelablePromise";

//simple example when your component get mounted and you want to fetch data 
// in useEffect

const FetchDataWithCancelablePromise = () => {
    const [todos, setTodos] = useState([]);

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
        <section>
            <h4>
                With Cancelable Promise on initial load data
            </h4>

            <div>
                <button onClick={_loadData}>Get Data</button>
                <br />
                <Link to={"/"}>
                    <strong>Home</strong>
                </Link>
            </div>

            <h4>Todos {todos.length}</h4>

            {
                todos.map((item, index) => {
                    <div key={index.toString()}>{item?.id}</div>
                })
            }

        </section>
    )
}

export default FetchDataWithCancelablePromise