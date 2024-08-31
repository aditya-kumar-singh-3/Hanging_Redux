import React from 'react';
import Reduxxx from './Reduxxx'
import { useSelector,useDispatch } from 'react-redux';
import { fetchTodos } from './CounterSlice';


const App = () => {

  const dispatch = useDispatch();

  return (
    <>
    <Reduxxx/>
    <button onClick={()=>dispatch(fetchTodos())} >FetchTodos</button>
    <div>
     
   
    </div>
    </>
  );
}

export default App;
