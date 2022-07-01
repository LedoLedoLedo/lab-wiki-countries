import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import countriesJSON from '../countries.json'
import CountryDetails from './CountryDetails'

function CountriesList() {
    
    return (
      
      <div className="Countries">
      

        <ul>
            {countriesJSON.map( function(country) {
                return (
                <li>
                <Link to={`/CountryDetails/${country.alpha3Code}`}>{country.name.common}</Link>
                </li>
                )
            })}
        </ul>
        
        <Routes>
            <Route path="/CountryDetails/:alpha3Code" element={<CountryDetails />} />
        </Routes>
      </div>
    );
  }
  
  export default CountriesList;
  