import './App.css';

import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './Home/home.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <Router>
          <Routes>
           <Route path="/register" element={<Register/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/home" element={<Home/>}/>

          </Routes>
        </Router>
      
      

    </div>
  );
}

export default App;
