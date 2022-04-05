import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//another example to get data with IsMount anti pattern to avoid warning
// in useEffect

const FetchDataWithIsMount = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let isMounted = true;
        fetch('https://jsonplaceholder.typicode.com/todos').then(todos => {
            if (isMounted) {
                setTodos(todos);
            }
        });
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section>
            <h4>
                With Ismount anti pattern on initial load data
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

export default FetchDataWithIsMount