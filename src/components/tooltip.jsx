import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function SimpleTooltips(props) {
  return (
    <div>
      <Tooltip title={props.title}>
        <Button aria-label={props.title}>
          <p>{props.content}</p>
        </Button>
      </Tooltip>
    </div>
  );
}
