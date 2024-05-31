import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogoPage from './components/LogoPage';
import Home from './pages/Home';
import Content from './pages/Content';
import AboutAs from './pages/AboutAs';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import Exercise from './pages/Exercise';
import Lessons from './pages/Lessons';
import Edit from './pages/Edit';
import { UserProvider } from './components/UserContext';

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="main-content">
                    <LogoPage />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/content" element={<Content />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/about" element={<AboutAs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/exercise" element={<Exercise />} />
                        <Route path="/lessons" element={<Lessons />} />
                        <Route path="/edit" element={<Edit />} />
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
