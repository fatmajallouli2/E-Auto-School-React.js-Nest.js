import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// Définition des styles avec Material-UI
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh", // Hauteur totale de la page
  },
  image: {
    backgroundImage: "url(img/SignIn.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4), // marge autour du formulaire
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  let history = useHistory();
  const classes = useStyles();

  /********************************* */

  const [values, setValues] = useState({//un état local pour stocker les valeurs du formulaire controlé

    username: "",
    password: "",
  });

  axios.defaults.withCredentials = true; // envoyer les cookies avec chaque requete

  //const [redirectAdmin, setRedirectAdmin] = useState(false);
  //const [redirectCandidate, setRedirectCandidate] = useState(false);
  const handleSubmit = async (event) => {
  event.preventDefault();
  history.push("/DashboardAdmin");
  
};


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {/* Bouton HOME pour retourner à l'accueil */}
        <button
          id="accueil1"
          className="btn-custom-sc"
          onClick={() => {
            history.push("/");
          }}
        >
          HOME
        </button>

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          {/* Formulaire de connexion */}
          <form className={classes.form} type="submit" onSubmit={handleSubmit}>
            {/* Champ username */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              Number
              fullWidth
              id="username"
              label="User Name"
              name="username"
              type="text"
              value={values.username}
              onChange={(event) =>
                setValues({ ...values, username: event.target.value })
              }
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={(event) =>
                setValues({ ...values, password: event.target.value })
              }
              id="password"
              autoComplete="current-password"
            />

            {/* Bouton de connexion */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            {/* Lien vers SignUp */}
            <Grid container>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}></Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
