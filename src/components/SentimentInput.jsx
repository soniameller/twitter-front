import React from 'react';
import { useForm } from '../hooks';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { getSentiment } from '../services/twitter';

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
    getSentiment(formValues).then((response) => {
      props.loadSentiment(response);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-multiline-flexible"
        label="Type or paste a tweet"
        multiline
        rowsMax={4}
        {...getInputProps('sentiment')}
      />
      <Button type="submit" variant="contained" color="primary">
        Analyse text
      </Button>
    </form>
  );
}
