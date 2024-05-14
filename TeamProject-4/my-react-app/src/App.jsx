import './App.css';
import HelloWorld from './HelloWorld';
import BackgroundImage from './BackgroundImage';
import { NavbarDefault } from './components/NavbarDefault';
import LogoPage from './LogoPage';
import LoginForm from './components/LoginForm';
function App() {
    return (
        <div>
            <LogoPage></LogoPage>
            <div className="main-content">
                <BackgroundImage />
                <HelloWorld />
                <NavbarDefault />
            </div>
        </div>
    );
}

export default App;
