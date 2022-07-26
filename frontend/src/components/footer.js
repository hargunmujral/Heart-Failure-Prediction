import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';


const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#BBBBBB",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const year = new Date().getFullYear();  
  return (
    <footer className={classes.footer}>
        <br />
        <div>
            <Stack direction='row' spacing={8}>
                <Typography style={{marginLeft: '20px'}}>
                    © {year} Hargun Mujral
                </Typography>
                <a style={{marginLeft: 'auto', marginRight:'20px' }} href="https://github.com/hargunmujral/Heart-Failure-Prediction">
                    Link to Github Repo
                </a>
            </Stack>
        </div>
        <br />
    </footer >
  );
}