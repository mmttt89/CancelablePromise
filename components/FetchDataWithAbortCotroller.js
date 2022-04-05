import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//another example to get data and cancel it with abort controller
// in useEffect

const FetchDataWithAbortController = () => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
        let abortController = new AbortController();

        fetch('https://jsonplaceholder.typicode.com/todos', { signal: abortController.signal })
            .then(result => result.json())
            .then(todos => setTodos(todos))
            .catch(err => console.log("error"))

        return () => {
            abortController.abort()
        }
    }, [])

    return (
        <section>
            <h4>
                With AbortController on initial load data
            </h4>

            <div>                
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

export default FetchDataWithAbortController