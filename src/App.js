import {ReactComponent as Logo} from './assets/images/logo.svg';
import './styles/index.scss'

function App() {
  return (
    <div className="App" >
      <div className="header-container">
        <Logo />
        <div className="score-container">
          <h2 className="score-text">SCORE</h2>
          <h2 className="score">12</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
