import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';
import { Grid, Typography } from '@material-ui/core';
import { fetchData } from '../api';

const CardList = () => {
  const [{ LastUpdated, ...data }, setData] = useState({});

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container justify="space-around" alignItems="center" spacing={6}>
      <Grid item xs={12} sm={12}>
        <Typography>
          Last Updated:&nbsp;
          {new Date(LastUpdated).toLocaleDateString()}
        </Typography>
      </Grid>
      <InfoCard data={data} />
    </Grid>
  );
};

export default CardList;
