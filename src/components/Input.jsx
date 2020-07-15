import React, { useState } from 'react';
import { useForm } from './../hooks';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { getTweets } from './../services/twitter';

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
  const { formValues, setFormValues, getInputProps } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();

    getTweets(formValues).then((response) => {
      props.loadTweets(response);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Max tweets" {...getInputProps('maxTweets')} />
      <TextField id="standard-basic" label="Topic" {...getInputProps('query')} />
      <TextField id="standard-basic" label="Language" {...getInputProps('lang')} />
      <Button type="submit" variant="contained" color="primary">
        API call
      </Button>
    </form>
  );
}
