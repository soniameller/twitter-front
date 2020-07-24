import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function Tweet(props) {
  return (
    <div>
      <Grid container>
        <Grid item>
          <img width={50} src="https://i.imgur.com/kMpTYcW.png" alt="" srcSet="" />
        </Grid>
        <Grid item xs={6}>
          <p>
            <b>{props.title}</b> <span className="disabeled">{props.at}</span>
          </p>
          <Box bgcolor="white" p="1em" borderRadius={10}>
            {props.tweet}
            <Box className="tweet__icons" display="flex" justifyContent="space-between" mt="1em">
              <img src="https://i.imgur.com/7oSRT2e.png" alt="" srcSet="" />
              <img src="https://i.imgur.com/8I4KovX.png" alt="" srcSet="" />
              <img src="https://i.imgur.com/BcS7UiY.png" alt="" srcSet="" />
              <img src="https://i.imgur.com/KX2qzxw.png" alt="" srcSet="" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
