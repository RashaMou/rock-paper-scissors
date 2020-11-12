import {ReactComponent as Logo} from './assets/images/logo.svg';
import Start from './components/Start'

function App() {
  return (
  <div className="wrapper">
    <div className="App" >
      <div className="header-container">
        <Logo />
        <div className="score-container">
          <h2 className="score-text">SCORE</h2>
          <h2 className="score">12</h2>
        </div>
      </div>
      <Start />
    </div>
    <div className='footer-container'>
      <h2 className="rules-text">RULES</h2>
    </div>
  </div>
  );
}

export default App;
