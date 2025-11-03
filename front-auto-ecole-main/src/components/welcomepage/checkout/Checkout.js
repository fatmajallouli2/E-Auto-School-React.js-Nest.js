import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

//liste des étapes de la procédure de paiement
const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout({price}) {
  // États pour les informations du formulaire, les info obtenus seront utilisés en review
  const [school, setSchool] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState(0);
  const [country, setCountry] = useState("");
  const [namecard, setNamecard] = useState("");
  const [numcard, setNumcard] = useState(0);
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState(0);
  let history = useHistory();

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0); // Étape actuelle

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            setSchool={setSchool}
            setFname={setFname}
            setLname={setLname}
            setAdress={setAdress}
            setCity={setCity}
            setRegion={setRegion}
            setZip={setZip}
            setCountry={setCountry}
          />
        );
      case 1:
        return (
          <PaymentForm
            setNumcard={setNumcard}
            setNamecard={setNamecard}
            setDate={setDate}
            setCvv={setCvv}
          />
        );
      case 2:
        return (
          <Review
            school={school}
            fname={fname}
            lname={lname}
            adress={adress}
            city={city}
            region={region}
            zip={zip}
            country={country}
            namecard={namecard}
            numcard={numcard}
            date={date}
            cvv={cvv}
            price={price}
          />
        );

      default:
        throw new Error("Unknown step");
    }
  }
  const handleNext = () => {
  
      activeStep === steps.length - 1
        ? history.push("DashboardAdmin")
        : setActiveStep(activeStep + 1);
  
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>  {/* affiche visuellement l'etape et son description */}
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Affichage du formulaire de l’étape actuelle */}
          <React.Fragment>
            <React.Fragment>
              {getStepContent(activeStep)} {/* Affichage du composant de l'etape actuelle */}

              {/* Boutons Back, Next/Start */}
              <div className={classes.buttons}>
                {/* si on est dans une étape intermédiaire du paiement, on peut retourner en arriere */}
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {/* si on est dans la derniere étape du paiement,­"start" redirige vers admin dashboard */}
                  {activeStep === steps.length - 1 ? "Start" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
