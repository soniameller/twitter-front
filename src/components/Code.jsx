import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Model summary </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <p>
              Follow this{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/soniameller/twitter-scrape-project"
              >
                link
              </a>{' '}
              to access the repository
            </p>
            <img
              style={{ maxWidth: '600px' }}
              src="https://i.imgur.com/MSPe7YQ.png"
              alt=""
              srcSet=""
            />

            <img
              style={{ maxWidth: '600px' }}
              src="https://i.imgur.com/CphPrlA.png"
              alt=""
              srcSet=""
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
