import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PaymentIcon from "@material-ui/icons/Payment";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Avatar from "@material-ui/core/Avatar";
import image2 from "../img/backg.jpg";
import { useForm } from "react-cool-form";

const URL = "http://localhost:8000/paiement";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: "url(${image2})",
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

const PayementTable = () => {
  
  const classes = useStyles();
  const [cin, setCin] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [paiementDate, setDate] = useState("");
  const [montant, setMontant] = useState("");
  const [username, setUsername] = useState("");
  const [paiements, setpaiements] = useState([]);
  const { reset } = useForm();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(URL);
    setpaiements(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = paiements.filter((employee) => id !== employee.id);
      setpaiements(del);
    });
  };

   const onCreatePost = async (e) =>{
    e.preventDefault();
    const postData = {
      cin,
      lastName,
      firstName,
      paiementDate,
      montant,
      username,
    };
    
    try {
      const res = await axios.post(
        `http://localhost:8000/paiement/addpaiement`, postData
      );

      setpaiements([...paiements, res.data]);

      reset({});
    } catch (error) {
      console.error("Erreur lors de la création :", error);
    }

    
      
  }


  const renderHeader = () => {
    let headerElement = [
      "Cin",
      "firstname",
      "lastname",
      "username",
      "Amount",
      "Payement Date",
      "delete",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      paiements &&
      paiements.map(
        ({ id, cin, lastName, firstName, paiementDate, montant, username }) => {
          return (
            <tr key={id}>
              <td>{cin}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{username}</td>
              <td>{montant}</td>
              <td>{paiementDate}</td>
              <td className="opration">
                <button className="button" onClick={() => removeData(id)}>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          );
        }
      )
    );
  };

 
  return (
    <div>
      <br />
      <h1 id="title" className="paymenttitle">
        {" "}
        Payment Table
      </h1>
      <div className="add">
        <Popup
          contentStyle={{ width: "500px" }}
          trigger={
            <button className="btn-custom-sc1 btn-custom-sc11">
              <AddIcon /> New{" "}
            </button>
          }
          position=" top right"
        >
          <div>
            <div
              style={{
                width: "100%",
                backgroundPosition: "center",
                height: "100%",
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Container component="main" maxWidth="L">
                <div className="formtitle">
                  <br />
                  <Avatar className={classes.avatar}>
                    <PaymentIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Payment
                  </Typography>
                </div>
                <br /> <br />
                <form type="submit" onSubmit={onCreatePost}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        autoComplete="lname"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="User Name"
                        name="username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="username"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="cin"
                        label="Cin"
                        type="text"
                        id="cin"
                        onChange={(e) => setCin(e.target.value)}
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="amount"
                        label="amount"
                        type="number"
                        id="amount"
                        onChange={(e) => setMontant(e.target.value)}
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <label>Payment Date </label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="paiementdate"
                        type="date"
                        id="paiementdate"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Add
                    </Button>
                  </Grid>
                </form>
              </Container>
            </div>
          </div>
        </Popup>
      </div>
      <br />
      <table id="students" className="payment">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
      <div></div>
    </div>
  );
};

export default PayementTable;
