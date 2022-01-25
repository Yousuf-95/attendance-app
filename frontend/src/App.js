import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import NavBar from './components/nav';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
