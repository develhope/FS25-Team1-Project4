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
                        <Route path="/my-react-app/src/pages/Exercise.jsx" element={<Exercise />} />
                        <Route path="/my-react-app/src/pages/Lessons.jsx" element={<Lessons />} />
                        <Route path="/my-react-app/src/pages/Edit.jsx" element={<Edit />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
