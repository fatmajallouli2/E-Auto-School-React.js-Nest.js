import React, { useState } from "react";
import clsx from "clsx"; // Permet de combiner dynamiquement plusieurs classes CSS
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer"; // Menu latéral
import AppBar from "@material-ui/core/AppBar"; // Barre supérieure
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link as RouterLink,useHistory } from "react-router-dom";
import Profile from "./Profile/Profile";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PaymentIcon from "@material-ui/icons/Payment";
import SettingsPowerIcon from "@material-ui/icons/SettingsPower";
import CarTable from "./DataTable/CarTable";
import SeanceCodeTable from "../Task/SeanceCodeTable";
import SeanceConduiteTable from "../Task/SeanceConduiteTable";
import ExamCodeTable from "../Task/ExamCodeTable";
import ExamConduiteTable from "../Task/ExamConduiteTable";
import CandidatesTable from "./DataTable/CandidatesTable";
import PaymentTable from "./DataTable/payementTable";
import Calendar from "../calendrier/calendar";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function DashboardAdmin({ authorized }) {
  const classes = useStyles();
  const history = useHistory();
  const [activeComponent, setActiveComponent] = useState("Profile");
  const menuItems = [
    { icon: <AccountBoxIcon />, text: "Profile" },
    //{ icon: <PeopleOutlineIcon />, text: "Employees" },
    { icon: <SupervisorAccountIcon />, text: "Candidates" },
    { icon: <PaymentIcon />, text: "Payment" },
    { icon: <AssignmentIcon />, text: "Cars Data" },
    { icon: <ListAltIcon />, text: "Traffic laws Sessions" },
    { icon: <DirectionsCarIcon />, text: "Driving Sessions" },
    { icon: <ListAltIcon />, text: "Traffic laws Exams" },
    { icon: <LocalTaxiIcon />, text: "Driving Exams" },
    { icon: <ListAltIcon />, text: "Quiz" },
    { icon: <AssignmentIcon />, text: "Calendar" },

  ];
  const [open, setOpen] = React.useState(true); // Etat du drawer (ouvert/fermé)
  // Ouvrir le drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // Fermer le drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* AppBar en haut */}
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          {/* Bouton pour ouvrir le drawer */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          {/* Titre de l'AppBar */}
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {activeComponent}
          </Typography>
          {/* Bouton de déconnexion redirige vers welcome page */}
          <IconButton color="inherit" component={RouterLink} to="/">
            <SettingsPowerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (menu latéral) */}
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        {/* Icone pour fermer le drawer */}
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        {/* Listes des elements du menu */}
        <List>{menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => setActiveComponent(item.text)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        </List>
      </Drawer>

      {/* Contenu principal */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              
                <div className="text-center">
                  {activeComponent === "Profile" && <Profile />}    
                  {activeComponent === "Candidates" && <CandidatesTable />}
                  {activeComponent === "Payment" && <PaymentTable />} 
                  {activeComponent === "Cars Data" && <CarTable />}
                  {activeComponent === "Traffic laws Sessions" && <SeanceCodeTable />}
                  {activeComponent === "Driving Sessions" && <SeanceConduiteTable />}
                  {activeComponent === "Traffic laws Exams" && <ExamCodeTable />}
                  {activeComponent === "Driving Exams" && <ExamConduiteTable/>}
                  {activeComponent === "Quiz" && history.push('/Quiz')}
                  {activeComponent === "Calendar" && <Calendar/>}
                
                </div>
              
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
