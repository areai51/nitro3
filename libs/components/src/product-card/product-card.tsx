import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/* eslint-disable-next-line */
export interface ProductCardProps {
  product: any;
}
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
    maxWidth: '280px',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export const ProductCard = ({ product }: ProductCardProps) => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Card className={classes.card}>
      <Link href={product.url} onClick={preventDefault}>
        <CardMedia
          className={classes.cardMedia}
          component="div"
          image={product.imageUrl}
          title={product.imageAlt}
        />
      </Link>
      <CardContent className={classes.cardContent}>
        <Link href={product.url} color="textPrimary" onClick={preventDefault}>
          <Typography gutterBottom variant="button" component="h2">
            {product.title}
          </Typography>
        </Link>
        <Typography variant="h5" component="p" color="primary">
          {product.formattedPrice}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Save
        </Button>
        <Button size="small" variant="contained" color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
