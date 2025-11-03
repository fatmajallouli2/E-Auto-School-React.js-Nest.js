import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useHistory } from "react-router-dom";

//créer des styles CSS en JavaScript grâce à Material-UI
const useStyles = makeStyles((theme) => ({
  "@global": {
    //Ajoute du style global pour toutes les balises <ul>
    ul: {
      margin: 0, //enlève les marges extérieures par défaut
      padding: 0, //enlève les espacements intérieurs
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap", //si le contenu dépasse en largeur, il passe à la ligne
  },
  toolbarTitle: {
    flexGrow: 1, //prend tout l’espace disponible
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

// Définition des forfaits a choisir et leurs prix à afficher
const tiers = [
  {
    title: "Free (for 2 days)",
    price: "0",
    description: [
      "Dashboard",
      "Profile",
      "Vehicles management",
      "Employees management",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro (200Dt/Month)",
    subheader: "Most popular",
    price: "200",
    description: [
      "Free quizzes",
      "Calendar",
      "Dashboard",
      "Online payment",
      "Profile",
      "Employees management",
      "Candidates management",
      "Vehicles management",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
];

// Composant Pricing pour afficher des cartes contenant des forfaits
export default function Pricing({ setPrice }) {
  let history = useHistory(); // Pour rediriger l'utilisateur
  const classes = useStyles(); // Appliquer les styles définis

  return (
    <div id="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Pricing</h2>
        </div>

        {/* Grille des cartes */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={6}
              >
                <Card>
                  {/* En-tête de la carte */}
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    className={classes.cardHeader}
                  />

                  {/* Contenu de la carte c'est la liste des fonctionnalités */}
                  <CardContent>
                    <div className={classes.cardPricing}></div>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>

                  {/* Bouton pour s'inscrire */}
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                      onClick={() => {
                        history.push("/SignUp"); // redirection vers la page SignUp
                        setPrice(tier.price); // définir le prix du plan sélectionné
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
