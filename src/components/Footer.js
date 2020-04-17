import React from 'react';
import { Typography, Link } from '@material-ui/core';
const Footer = () => {
  return (
    <div style={{ marginTop: '60px' }}>
      <Typography variant="subtitle1" gutterBottom>
        Data source:&nbsp;
        <Link
          href="https://covid19api.com/"
          color="textSecondary"
          target="_blank"
        >
          https://covid19api.com/
        </Link>
      </Typography>
    </div>
  );
};

export default Footer;
