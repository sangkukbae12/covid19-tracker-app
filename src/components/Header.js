import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          <span role="img" aria-label="Chart">
            📈
          </span>{' '}
          COVID-19 Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
