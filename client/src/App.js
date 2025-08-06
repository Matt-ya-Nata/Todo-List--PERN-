import { Fragment } from 'react/jsx-runtime';
import './App.css';

//componants

import InputTodo from "./componants/InputTodo"

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo/>
      </div>
    </Fragment>
  );
}

export default App;
