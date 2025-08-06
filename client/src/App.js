import { Fragment } from 'react/jsx-runtime';
import './App.css';

//componants

import InputTodo from "./componants/InputTodo";
import ListTodos from "./componants/ListTodos";

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo/>
        <ListTodos/>
      </div>
    </Fragment>
  );
}

export default App;
