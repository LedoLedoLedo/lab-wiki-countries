import React from 'react';
import countriesJSON from '../countries.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
  const params = useParams();

  let filterArr = [...countriesJSON];

  let count = filterArr.find(function (all) {
    return params.alpha3Code === all.alpha3Code;
  });

  return (
    <div>
      <h2>
        Country Name: {count.name.common} <br />
        Alpha 3 Code: {count.alpha3Code} <br />
        Borders:{' '}
        {count.borders.map(function (country) {
          return (
            <ul>
              <li>
                <Link key={country} to={`/country/${country}`}>
                  {country}
                </Link>
              </li>
            </ul>
          );
        })}
        <br />
        Area: {count.area}
        <br />
        Capital: {count.capital}
        <br />
        Alpha2Code: {count.alpha2Code}
        <br />
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${count.alpha2Code.toLowerCase()}.png`}
        />
      </h2>
    </div>
  );
};
export default CountryDetails;
