import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ProductTile } from '@nitro3/components';
import ProductMock from '../public/mocks/products-list.mock';
import { Master as Layout } from '@nitro3/templates';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export const Index = () => {
  const classes = useStyles();
  return (
    <Layout title="Nitro3: The Leading Microfrontend Framework">
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {ProductMock.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductTile product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Index;
