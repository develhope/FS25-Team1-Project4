// App.js
import './App.css';
import LogoPage from './components/LogoPage';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './pages/Content';
import AboutAs from './pages/AboutAs';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import Exercise from './pages/Exercise';
import Lessons from './pages/Lessons';
import Edit from './pages/Edit';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './contexts/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="main-content">
                    <LogoPage />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/content" element={<ProtectedRoute element={Content} />} />
                        <Route path="/about-us" element={<AboutAs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/exercise" element={<ProtectedRoute element={Exercise} />} />
                        <Route path="/lessons" element={<ProtectedRoute element={Lessons} />} />
                        <Route path="/edit" element={<ProtectedRoute element={Edit} />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
