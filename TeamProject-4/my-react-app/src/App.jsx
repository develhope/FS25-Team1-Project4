import './App.css';
import HelloWorld from './HelloWorld';
import BackgroundImage from './BackgroundImage';
import { NavbarDefault } from './components/NavbarDefault';
import LogoPage from './LogoPage';
import LoginForm from './components/LoginForm';
import LoginPage from './pages/LoginPage';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './Content';

function App() {
    return (
        <div>
            <Router>
                <div className="main-content">
                    <LogoPage />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/content" element={<Content />} />
                        <Route path="/my-react-app/src/pages/LoginPage.jsx" element={<LoginPage />}></Route>
                    </Routes>
                    {/* <LoginPage /> */}
                </div>
            </Router>
        </div>
    );
}

export default App;
