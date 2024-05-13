import './App.css';
import HelloWorld from './HelloWorld';
import BackgroundImage from './BackgroundImage';
function App() {
    return (
        <div>
            <BackgroundImage />
            <div className="main-content">
                <HelloWorld />
            </div>
        </div>
    );
}

export default App;
