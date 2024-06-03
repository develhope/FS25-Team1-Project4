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
import LessonsHtml from './pages/LessonsHtml';
import Edit from './pages/Edit';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './contexts/ProtectedRoute';
import AvatarSettings from './pages/AvatarSettings';
import LessonsMenu from './pages/LessonsMenu';
import LessonsCss from './pages/LessonCss';
import LessonsJs from './pages/LessonJs';
import LessonsGitHub from './pages/LessonGitHub';
import LessonsReact from './pages/LessonReact';

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
                        <Route path="/lessons" element={<ProtectedRoute element={LessonsHtml} />} />
                        <Route path="/edit" element={<ProtectedRoute element={Edit} />} />
                        <Route path="/avatar-settings" element={<ProtectedRoute element={AvatarSettings} />} />
                        <Route path="/menu-lessons" element={<ProtectedRoute element={LessonsMenu} />} />
                        <Route path="/menu-lessons/html" element={<ProtectedRoute element={LessonsHtml} />} />
                        <Route path="/menu-lessons/css" element={<ProtectedRoute element={LessonsCss} />} />
                        <Route path="/menu-lessons/javascript" element={<ProtectedRoute element={LessonsJs} />} />
                        <Route path="/menu-lessons/git" element={<ProtectedRoute element={LessonsGitHub} />} />
                        <Route path="/menu-lessons/react" element={<ProtectedRoute element={LessonsReact} />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
