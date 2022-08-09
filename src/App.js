
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import In from './Dashboard/In';
import Transaction from './Dashboard/Transaction';
import Login from './Login/Login';


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Dashboard />
      {/* <In/> */}
      <Transaction/>
    </div>
  );
}

export default App;
