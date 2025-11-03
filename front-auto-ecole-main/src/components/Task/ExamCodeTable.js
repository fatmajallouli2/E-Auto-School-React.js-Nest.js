import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import image2 from "../dashbord/img/backg.jpg";
import Popup from "reactjs-popup";
import ListAltIcon from "@material-ui/icons/ListAlt";
import "reactjs-popup/dist/index.css";
import { useForm } from "react-cool-form";
const URL = "http://localhost:8000/exam";
const useStyles2 = makeStyles((theme) => ({
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
const ExamCodeTable = () => {
  
  const classes = useStyles();
  const [exams, setexams] = useState([]);
  const { reset } = useForm();
  const classes2 = useStyles2();
  const [type, setTypee] = useState("");
  const [date, setDatee] = useState("");
  const [startTime, setStartTimee] = useState("");
  const [monitorCin, setMonitorCinn] = useState("");
  const [duration, setDurationn] = useState("");
  const [carId, setCarIdd] = useState("");
  const [userCin, setUserCinn] = useState("");

  /**************/
  const onCreatePost = async (e) => {
    e.preventDefault();
    const postData = {
      type,
      date,
      startTime,
      monitorCin,
      duration,
      carId,
      userCin,
    };
    try {
      const res = await axios.post(
        `http://localhost:8000/exam/addexam`,
        postData
      );

      setexams([...exams, res.data]);

      reset({});
    } catch (error) {
      console.error("Erreur lors de la création :", error);
    }
  };
  useEffect(() => {
    getData();
  }, [exams]);

  const getData = async () => {
    const response = await axios.get(URL);
    setexams(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = exams.filter((exam) => id !== exam.id);
      setexams(del);
    });
  };

  const renderHeader = () => {
    let headerElement = [
      "Monitor Cin",
      "Candidate Cin",
      "Date",
      "StartTime",
      "Duration",
      "Delete",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      exams &&
      exams.map(
        ({
          id,
          type,
          date,
          startTime,
          monitorCin,
          userCin,
          plaque,
          duration,
        }) => {
          if (type === 1)
            return (
              <tr key={id}>
                <td>{monitorCin}</td>
                <td>{userCin}</td>
                <td>{date}</td>
                <td>{startTime}</td>
                <td>{duration}</td>

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
      <h1 id="title" className="examcodetitle">
        Traffic Laws Exams Table
      </h1>
      <div className="add">
        <Popup
          contentStyle={{ width: "500px" }}
          trigger={
            <button className="btn-custom-sc1 btn-custom-sc16 ">
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
                  <Avatar className={classes2.avatar}>
                    <ListAltIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Add exam
                  </Typography>
                </div>
                <br /> <br />
                <form
                  className={classes.form}
                  type="submit"
                  onSubmit={onCreatePost}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <label>Candidate's CIN number</label>
                      <TextField
                        autoComplete="Cincondidat"
                        name="userCin"
                        variant="outlined"
                        required
                        fullWidth
                        id="userCin"
                        type="text"
                        onChange={(e) => setUserCinn(e.target.value)}
                        autoFocuss
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <label>Monitor's CIN number</label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="monitorCin"
                        name="monitorCin"
                        type="text"
                        onChange={(e) => setMonitorCinn(e.target.value)}
                        autoComplete="cinMonitor"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <label>Date</label>
                      <TextField
                        variant="outlined"
                        type="date"
                        required
                        fullWidth
                        id="date"
                        onChange={(e) => setDatee(e.target.value)}
                        name="date"
                        autoComplete="date"
                      />
                      <Grid />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <label>Time</label>
                      <TextField
                        variant="outlined"
                        type="time"
                        required
                        fullWidth
                        id="startTime"
                        onChange={(e) => setStartTimee(e.target.value)}
                        name="startTime"
                        autoComplete="startTime"
                      />
                      <Grid />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <h4>Type</h4>
                      <div>
                        <input
                          type="radio"
                          value="1"
                          onChange={(e) => setTypee(e.target.value)}
                          name="type"
                        />
                        Code
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <label>Duration</label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="duration"
                        type="number"
                        onChange={(e) => setDurationn(e.target.value)}
                        id="duration"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Set
                  </Button>
                  <Grid container justifyContent="flex-end"></Grid>
                </form>
              </Container>
            </div>
          </div>
        </Popup>
      </div>
      <br />
      <table id="students" className="examcode">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default ExamCodeTable;
