import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
/* eslint-disable-next-line */
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heroActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  heroButton: {
    margin: '0 10px',
  },
}));

export interface HeroBannerProps {
  title?: string;
  description?: string;
  image?: string;
}

export const HeroBanner = ({ title, description, image }: HeroBannerProps) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.heroButtons}>
        <Grid container spacing={6} justify="center">
          <Grid item xs={6}>
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
              paragraph
            >
              {description}
            </Typography>
            <div className={classes.heroActions}>
              <Button
                variant="contained"
                color="primary"
                className={classes.heroButton}
              >
                Shop Products
              </Button>
              <Button
                variant="outlined"
                color="primary"
                className={classes.heroButton}
              >
                Learn More
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img src={image} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default HeroBanner;
