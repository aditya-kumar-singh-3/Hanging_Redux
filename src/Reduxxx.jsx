
import { useSelector,useDispatch } from 'react-redux';
import { fetchTodos } from './CounterSlice';
import { useEffect } from 'react';

const Reduxxx = () => {
    const dispatch = useDispatch();
    const { isLoading, data, isError } = useSelector((state) => state.todo);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

   
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong...</div>;
    }
  return (
    <div>
   <div>
            <h1>Todo List</h1>
            <ul>
                {data && data.todos.map((todo) => (
                    <li key={todo.id}>{todo.todo}</li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Reduxxx;
