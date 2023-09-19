import esty from './data/etsy.json'; // почему импортируется уже распарсенный json?
import Listing from './components/Listing';


function App() {
  return (
    <Listing items={esty}/>
  );
}

export default App;
