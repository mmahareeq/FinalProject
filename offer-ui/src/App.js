import './App.css';

import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/Home/home.jsx'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
           <Route path="/register" element={<Register/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/" exact element={<Home/>}/>
           <Route path='*' element = {<Navigate to='/'/>}/>
          </Routes>
        </Router>
      
      

    </div>
  );
}

export default App;
