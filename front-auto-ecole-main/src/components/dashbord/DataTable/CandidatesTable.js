import React, { useState, useEffect } from "react";
import { useForm } from "react-cool-form";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import image2 from "../img/backg.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddIcon from "@material-ui/icons/Add";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";


const URL = "http://localhost:8000/person";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: "url(${image})",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CandidatesTable = () => {
  const classes = useStyles();
  const history = useHistory();
  const [cin, setCin] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(2);
  const [persons, setpersons] = useState([]);
  const { reset } = useForm();
  useEffect(() => {
    getAllCandidates();
  }, []);

  //getter de tous
  const getAllCandidates = async () => {
    const response = await axios.get(URL);
    const candidates = response.data.filter((person) => person.role === 2);
    setpersons(candidates);
  };

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = persons.filter((person) => id !== person.id);
      setpersons(del);
    });
  };

  const renderHeader = () => {
    let headerElement = [
      "Cin",
      "firstname",
      "lastname",
      "username",
      "email",
      "phone Number",
      "adress",
      "birth Date",
      "update",
      "delete",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const onCreatePost = async (e) => {
    e.preventDefault();
    const newPerson = {
      cin,
      email,
      password,
      role,
      lastname,
      firstname,
      birthdate,
      phone,
      adress,
      username,
    };
    try {
      const res = await axios.post(
        `http://localhost:8000/person/addperson`,newPerson
      );

      setpersons([...persons, res.data]);

      reset({});
    } catch (error) {
      console.error("Erreur lors de la création :", error);
    }
  };

  const renderBody = () => {
    return (
      persons &&
      persons.map((person) => {
        return (
          <tr key={person.id}>
            <td>{person.cin}</td>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
            <td>{person.username}</td>
            <td>{person.email}</td>
            <td>{person.phone}</td>
            <td>{person.adress}</td>
            <td>{person.birthdate}</td>
            <td>
              <button
                onClick={() => {
                  history.push(`/EditPerson/${person.id}`);
                }}
              >
                <UpdateIcon />{" "}
              </button>
            </td>
            <td className="opration">
              <button className="button" onClick={() => removeData(person.id)}>
                <DeleteIcon />
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <br />
      <h1 id="title" className="studentstitle">
        {" "}
        Candidates Table
      </h1>
      <div className="add">
        <Popup
          contentStyle={{ width: "500px" }}
          trigger={
            <button className="btn-custom-sc14 btn-custom-sc1 ">
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
                    <LocalTaxiIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Add Candidate
                  </Typography>
                </div>
                <br /> <br />
                <form type="submit" onSubmit={onCreatePost}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <label>Cin</label>
                      <TextField
                        autoComplete="cin"
                        name="cin"
                        variant="outlined"
                        placeholder=""
                        required
                        fullWidth
                        id="cin"
                        type="text"
                        onChange={(e) => setCin(e.target.value)}
                        autoFocuss
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <label>firstname</label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="firstname"
                        name="firstname"
                        autoComplete="mark"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <label>Lastname</label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastname"
                        name="lastname"
                        autoComplete="lastname"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <label>Username</label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        name="username"
                        autoComplete="username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <label>Email </label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <label>Phone Number </label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="phone"
                        name="phone"
                        autoComplete="phone"
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <label>Adress </label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="adress"
                        name="adress"
                        autoComplete="adress"
                        type="text"
                        onChange={(e) => setAdress(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <label>Birth date </label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="birthdate"
                        name="birthdate"
                        autoComplete="birthdate"
                        type="date"
                        onChange={(e) => setBirthdate(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <label>Password </label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        autoComplete="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Add
                  </Button>
                  <br />
                </form>
              </Container>
            </div>
          </div>
        </Popup>
      </div>
      <br />
      <table id="students" className="students">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default CandidatesTable;
