import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  break: {
    display: 'block',
    content: "",
    marginTop: '30px',
  },
}));

export default function HeaderBreak() {
  const classes = useStyles();
  return (
    <div className={classes.break}>
        <br className={classes.break} />
    </div>
  );
}