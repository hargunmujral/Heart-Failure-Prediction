// creating a header using material ui
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { Link as RouterLink} from 'react-router-dom';


// Investigate why makeStyles is not working
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
}));

export default function Header() {
  const classes = useStyles();
  const display = () => {
    return <Toolbar>{headerDetails}</Toolbar>;
  }; 

  const headerDetails = (
    <Typography variant="h6" component="h1" className={classes.logo}>
        Heart Failure Prediction App
    </Typography>
  );
  
  return (
    <header>
      <AppBar className={classes.header}>{display()}</AppBar>
    </header>
  );
}