import './App.css';
import HelloWorld from './HomeText';
import BackgroundImage from './BackgroundImage';
import { NavbarDefault } from './components/NavbarDefault';
import LogoPage from './LogoPage';
import LoginForm from './components/LoginForm';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './pages/Content';
import AboutAs from './pages/AboutAs';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <div>
            <Router>
                <div className="main-content">
                    <LogoPage />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/content" element={<Content />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/my-react-app/src/pages/AboutAs.jsx" element={<AboutAs />} />
                        <Route path="/my-react-app/src/pages/Contact.jsx" element={<Contact />} />
                    </Routes>
                    {/* <LoginPage /> */}
                </div>
            </Router>
        </div>
    );
}

export default App;
