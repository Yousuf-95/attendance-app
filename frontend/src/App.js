import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {useContext} from 'react';
import { AuthContext, AuthProvider } from './context/authContext';
import NavBar from './components/nav';
import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import AdminPage from './pages/admin';

const RequireAuth = ({children}) => {
  const authContext = useContext(AuthContext);
  return(
    authContext.authState.isAuthenticated && children
  );
}



function App() {
  // const authContext = useContext(authContext);
  // const navigate = useNavigate();
  
  // useEffect(() => {

  //   if(authContext.authState.isAuthenticated)
  //     navigate(-1);
  // }, [navigate])

  return (
    
    <Router>
        <AuthProvider>
        <div className="App">
          <NavBar />
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/admin" element={<AdminPage />} />
            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />

          </Routes>
        </div>
    </AuthProvider>
      </Router>

  );
}

export default App;
