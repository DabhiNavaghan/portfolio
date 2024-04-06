
import './App.css';
import {Socialicons} from './Component/SocialMedia.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='name'>Navaghan Dabhi</h1>
        <div><span className='position'>flutter Developer</span> <span className='helper'>based in India</span></div>
        <p className='email'>dabhinavaghan6@gmail.com</p>
        <Socialicons />
      </header>
    </div>
  );
}

export default App;
