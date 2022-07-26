import React from 'react';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    position: "static",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 400,
    color: "#FFFEFE",
    textAlign: "left",
  },
  link: {
    color: "#FFFEFE",
    textDecoration: "none",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 400,
    '&:hover': {
      color: "#FFFEFE",
      textDecoration: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header>
      <AppBar className={classes.header}>
        <Toolbar className={classes.header}>
          <Typography variant="h6" component="h1" className={classes.logo} sx={{ flexGrow: 1 }}>
              Heart Failure Prediction App
          </Typography>
          <Stack direction='row' spacing={4}>
            <Link to="/" className={classes.link}>Home</Link>
            <Link to="/about" className={classes.link}>About</Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
}