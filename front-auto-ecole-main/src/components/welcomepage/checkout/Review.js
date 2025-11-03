import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

// Composant fonctionnel Review qui reçoit les informations de la commande de paiement en props
export default function Review({school,fname,lname,adress, city,region,zip, country,namecard,numcard,date,cvv,price}) {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      {/* Liste avec le total de la commande */}
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {price} $
          </Typography>
        </ListItem>
      </List>

      {/* Colonne gauche : Adresse de livraison */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{fname} {lname}</Typography>
          <Typography gutterBottom>{adress}, {city}, {region}, {zip}, {country}</Typography>
        </Grid>

        {/* Colonne droite : Détails de paiement */}
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography >{school}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography >
                  Card Type:{namecard}
                  <br/>
                   Card Number:{numcard}-{cvv}
                   <br/>
                   Card Holder: {fname} {lname}
                   <br/>
                  Card  Date:{date}
                  </Typography>
                </Grid>
              </React.Fragment>
            }
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}