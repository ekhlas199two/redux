import './App.css';

import AddItem from './REDUX/comp/AddItem';
import List from './REDUX/comp/list';
function App() {
  return (
    <div className="App">
      <div className='ADD'>
 <h1>TO-DO list</h1>
  <AddItem/></div>
 <List/>

    </div>
  );
}

export default App;
