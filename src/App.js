import Navigation from './compenents/Navigation';
import Homepage from './compenents/Homepage';
import './App.css';

function App() {
  return (
    <div className="AppContainer">
      <div className='navigation'><Navigation /></div>
      <div className='homepage'><Homepage /></div>
    </div>
  );
}

export default App;
