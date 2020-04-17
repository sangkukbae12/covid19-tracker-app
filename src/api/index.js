import axios from 'axios';

const fetchData = async () => {
  try {
    const {
      data: {
        Global: {
          NewConfirmed,
          TotalConfirmed,
          NewDeaths,
          TotalDeaths,
          NewRecovered,
          TotalRecovered,
        },
        Date,
      },
    } = await axios.get(`https://api.covid19api.com/summary`);

    return {
      LastUpdated: Date,
      Confirmed: { Total: TotalConfirmed, New: NewConfirmed },
      Recovered: { Total: TotalRecovered, New: NewRecovered },
      Deaths: { Total: TotalDeaths, New: NewDeaths },
    };
  } catch (error) {
    return error;
  }
};

const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`https://covid19.mathdro.id/api/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

const fetchCountries = async () => {
  try {
    const {
      data: { Countries },
    } = await axios.get(`https://api.covid19api.com/summary`);

    return Countries.map(
      ({ Country, TotalConfirmed, TotalRecovered, TotalDeaths }) => ({
        Country,
        TotalConfirmed,
        TotalRecovered,
        TotalDeaths,
      })
    );
  } catch (error) {
    return error;
  }
};

const fetchCountry = async (country) => {
  try {
    const { data } = await axios.get(
      `https://api.covid19api.com/dayone/country/${country}`
    );
    return data.map(({ Confirmed, Recovered, Deaths, Date }) => ({
      Confirmed,
      Recovered,
      Deaths,
      Date,
    }));
  } catch (error) {
    return error;
  }
};

const getCountryName = async () => {
  try {
    const { data } = await axios.get(`https://api.covid19api.com/countries`);

    // return data.map(({ Country, Slug }) => ({ Country, Slug }));
    return data;
  } catch (error) {
    return error;
  }
};

export {
  fetchData,
  fetchDailyData,
  fetchCountries,
  getCountryName,
  fetchCountry,
};
