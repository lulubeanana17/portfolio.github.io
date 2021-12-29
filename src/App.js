import Navigation from './compenents/Navigation';
import Homepage from './compenents/Homepage';
import Works from './compenents/Works';
import './App.css';

function App() {
  return (
    <div className="AppContainer">
      <div className='navigation'><Navigation /></div>
      <div className='homepage'><Homepage /></div>
      <div className='works'><Works /></div>
    </div>
  );
}

export default App;
