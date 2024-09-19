import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    Now Using Bharath's MERN Starter Template<br/>
                    <p className='bg-red-500'>Tailwind Css ok with bg-red-500</p>
                   route ----  Your are Currently in /{<Outlet/>} --- route (this is an route test line block)
                    <Link to={'home'} >click here to check the routes</Link>
                </header>
            </div>
            
        </div>
   
  );
}

export default App;
