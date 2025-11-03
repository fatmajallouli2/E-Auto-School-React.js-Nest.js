import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
/*function onCreatePost(e) {
    
    e.preventDefault();
    const postData = {
      cin,
      email,
      password,
      role,
      lastName,
      firstName,
      birthdate,
      phoneNumber,
      adress,
      username,
    };
    axios
      .post(`http://localhost:8000/user/register`, postData)
      .then((response) => {
        console.log(response);
      });
  }
*/
export default function SignUp({ price }) {
  const classes = useStyles();
  let history = useHistory();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        {/* Formulaire d'inscription */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* Champ prénom du manager */}
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Manager's first Name"
                autoFocus
              />
            </Grid>

            {/* Champ nom du manager */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Managers's last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            {/* Nom de l'auto-école */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Driving School's Name"
                label="Driving School's Name"
                name="Driving School's Name"
                autoComplete="lname"
              />
            </Grid>

            {/* Mot de passe */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              history.push("/Checkout");
            }}
          >
            Sign Up
          </Button>

          {/* Lien vers SignIn si déjà inscrit */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="SignIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>

        {/* Bouton HOME pour revenir à l'accueil */}
        <button
          id="accueil2"
          className="btn-custom-sc"
          onClick={() => {
            history.push("/");
          }}
        >
          HOME
        </button>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
