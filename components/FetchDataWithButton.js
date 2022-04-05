import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cancelablePromise from "../cancelablePromise";

//In case you need to do a button click and fetch data but it still must be cancelable
// fetching data
//this is a simple fix you can add your own methods

const FetchDataWithButton = () => {
    let cancelableItems = [];
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        return () => {
            cancelableItems.map(a => {
                return a.cancel?.();
            })
        }
    }, [])

    const _loadData = () => {
        const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos')
        const cancelablePromiseExample = cancelablePromise(todosPromise);

        cancelableItems.push(cancelablePromiseExample)

        cancelablePromiseExample.promise
            .then(result => result.json())
            .then(async todosData => {
                setTodos(todosData)
            })
            .catch(({ isCanceled, ...error }) => console.log('isCanceled', isCanceled));
    }


    return (
        <div>
            <h4>
                With Cancelable Promise
            </h4>

            <div className='row'>
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

        </div>
    )
}

export default FetchDataWithButton