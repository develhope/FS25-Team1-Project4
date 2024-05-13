import './App.css';
import HelloWorld from './HelloWorld';
import BackgroundImage from './BackgroundImage';
import { NavbarDefault } from './components/NavbarDefault';
import LogoPage from './LogoPage';
function App() {
    return (
        <div>
            <LogoPage></LogoPage>
            <BackgroundImage />
            <div className="main-content">
                <HelloWorld />
                <NavbarDefault />
            </div>
        </div>
    );
}

export default App;
