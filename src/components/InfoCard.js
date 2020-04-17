import React from 'react';
import CountUp from 'react-countup';
import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  Grid,
} from '@material-ui/core';

const InfoCard = ({ data }) => {
  return (
    <>
      {Object.entries(data).map((data) => (
        <Grid item xs={12} sm={4} key={data[0]}>
          <Card>
            <CardHeader color="primary" title={data[0]} />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total:&nbsp;
                <CountUp
                  start={0}
                  end={data[1].Total}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                New:&nbsp;
                <CountUp
                  start={0}
                  end={data[1].New}
                  duration={2.75}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default InfoCard;
