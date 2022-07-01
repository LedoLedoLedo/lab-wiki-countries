import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import CountriesJson from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
function App() {
  return (
    <div className='list'>
      <header>
        <nav>
          <Link to="/">Wiki Countries</Link>
          {/* <Link to="/country">Countries</Link> */}
          {/* <Navbar/> */}
          <CountriesList />
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/country" element={<CountriesList />}></Route>
        <Route path="/country:alpha3code" element={<CountryDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
