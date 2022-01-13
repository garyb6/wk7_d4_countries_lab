import React, {useState, useEffect} from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = () => {

    const [countryList, setCountryList] = useState([]);

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountryList(data));
    }

    useEffect(() => {
        getCountries();
    }, [])

    return(
        <div>
        <h2>All of the Countries</h2>
        <CountryList countryList={countryList}/>
        </div>
    )

}

export default CountryContainer