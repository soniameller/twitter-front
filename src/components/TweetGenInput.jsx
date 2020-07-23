import React from 'react';
import { useForm } from '../hooks';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { getTweets } from '../services/twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const { formValues, getInputProps } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    getTweets(formValues).then((response) => {
      console.log(response);
      props.loadTweets(response);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Start word/s (spanish)" {...getInputProps('start')} />
      <Button type="submit" variant="contained" color="primary">
        Generate tweet
      </Button>
    </form>
  );
}
