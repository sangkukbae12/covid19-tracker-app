import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData, getCountryName, fetchCountry } from '../api';
import CountryPicker from './CountryPicker';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  const [CountryData, setCountryData] = useState([]);
  const [countryNames, setCountryNames] = useState([]);
  const [defaultCountryName, setDefaultCountryName] = useState('Global');

  useEffect(() => {
    fetchDailyData()
      .then((data) => setDailyData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getCountryName()
      .then((data) => setCountryNames(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCountryChange = async (country) => {
    setDefaultCountryName(country);
    if (country === 'Global') {
      return;
    }
    console.log(country);
    const data = await fetchCountry(country);
    setCountryData(data);
    console.log(CountryData);
  };

  return (
    <div style={{ marginTop: '60px' }}>
      <CountryPicker
        countryNames={countryNames}
        handleCountryChange={handleCountryChange}
      />
      {defaultCountryName === 'Global' ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) =>
              new Date(date).toLocaleDateString('en-US')
            ),
            datasets: [
              {
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#ffcc00',
                fill: true,
              },
              {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: '#cc3300',
                fill: true,
              },
            ],
          }}
        />
      ) : (
        <Line
          data={{
            labels: CountryData.map((CountryData) =>
              new Date(CountryData.Date).toLocaleDateString('en-US')
            ),
            datasets: [
              {
                data: CountryData.map((data) => data.Confirmed),
                label: 'Infected',
                borderColor: '#ffcc00',
                fill: true,
              },
              {
                data: CountryData.map((data) => data.Recovered),
                label: 'Recovered',
                borderColor: '#99cc33',
                fill: true,
              },
              {
                data: CountryData.map((data) => data.Deaths),
                label: 'Deaths',
                borderColor: '#cc3300',
                fill: true,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default Chart;
