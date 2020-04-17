import React from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';

const CountryPicker = ({ countryNames, handleCountryChange }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="Global">Global</option>
          {countryNames.map((countryName, i) => (
            <option key={i} value={countryName.Slug}>
              {countryName.Country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
