import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import image2 from "../img/back31.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import { useForm } from "react-cool-form";

const URL = "http://localhost:8000/car";

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
  label: {
    textAlign: "center",
  },
  form: {
    height: "100%",
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function CarTable() {
  const [carcolor, setCarcolor] = useState("");
  const [registrationNb, setRegistrationNb] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [technical_visit_date, setTechnical_visit_date] = useState("");
  const [insurance_date, setInsurance_date] = useState("");
  const history = useHistory();

  const [cars, setcars] = useState([]);

  const classes = useStyles();

  const { reset } = useForm();

  useEffect(() => {
    getAll();
  }, []);

  //getter de tous les cars
  const getAll = async () => {
    const response = await axios.get(URL);
    setcars(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then(() => {
      const del = cars.filter((car) => id !== car.id);
      setcars(del);
    });
  };
  const onCreatePost = async (e) => {
    e.preventDefault();
    const newCar = {
      carcolor,
      registrationNb,
      brand,
      model,
      technical_visit_date,
      insurance_date,
    };
    try {
      const res = await axios.post(`http://localhost:8000/car/addcar`, newCar);

      // Ajouter la nouvelle voiture dans le tableau (sans reload)
      setcars([...cars, res.data]);

      reset({});
    } catch (error) {
      console.error("Erreur lors de la création :", error);
    }
  };
  const renderHeader = () => {
    let headerElement = [
      "id",
      "Matriculation",
      "brand",
      "model",
      "color",
      "technical visit date",
      "insurance date",
      "update",
      "delete",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      cars &&
      cars.map((car) => {
        return (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.registrationNb}</td>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.carcolor}</td>
            <td>{car.technical_visit_date}</td>
            <td>{car.insurance_date}</td>
            <td>
              <button
                onClick={() => {
                  history.push(`/EditCar/${car.id}`);
                }}
              >
                <UpdateIcon />{" "}
              </button>
            </td>
            <td className="opration">
              <button className="button" onClick={() => removeData(car.id)}>
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
      <h1 id="title" className="carstitle">
        {" "}
        Cars Table
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
                    Add car
                  </Typography>
                </div>
                <br /> <br />
                <form type="submit" onSubmit={onCreatePost}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <label>Plaque</label>
                      <TextField
                        autoComplete="plaque"
                        name="registrationNb"
                        variant="outlined"
                        placeholder=""
                        required
                        fullWidth
                        id="registrationNb"
                        type="text"
                        onChange={(e) => setRegistrationNb(e.target.value)}
                        autoFocuss
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <label>Brand</label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="brand"
                        name="brand"
                        autoComplete="mark"
                        type="text"
                        onChange={(e) => setBrand(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <label>Model</label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="model"
                        name="model"
                        autoComplete="model"
                        type="text"
                        onChange={(e) => setModel(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <label>Color</label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="carcolor"
                        name="carcolor"
                        autoComplete="color"
                        type="text"
                        onChange={(e) => setCarcolor(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <label>Insurance date </label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="insurance_date"
                        name="insurance_date"
                        autoComplete="model"
                        type="date"
                        onChange={(e) => setInsurance_date(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <label>Technical visit date </label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="technical_visit_date"
                        name="technical_visit_date"
                        autoComplete="technical_visit_date"
                        type="date"
                        onChange={(e) =>
                          setTechnical_visit_date(e.target.value)
                        }
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
      <table id="students" className="cars">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
}

export default CarTable;
