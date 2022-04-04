import React, { useEffect, useState } from 'react'

const FetchDataWithOutCancelablePromise = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        let isMounted = true;
        fetch('https://jsonplaceholder.typicode.com/todos').then(todos => {
            if (isMounted) {
                setTodos(todos);
            }
        });

    }, []);

    return (
        <div>
             <h4>
                 Normal Fetch
             </h4>


        </div>
    )
}

export default FetchDataWithOutCancelablePromise
