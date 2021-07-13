import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  signup: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 100,
      marginLeft: 420,
      marginRight: 350,
      width: 450,
      height: 450,
    },
    marginTop: 100,
    width: 450,
    height: 450,
  },
  create: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 600,
      fontSize: 20,
      padding: 10,
      marginLeft: 150,
    },
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    fontSize: 22,
    padding: 20,
    marginLeft: 100,
  },
  input: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 20,
    },
    width: 320,
    marginLeft: 40,
    marginTop: 20,
  },
  eminput: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 15,
    },
    width: 320,
    marginLeft: 70,
    marginTop: 15,
  },
  signupbtn: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 70,
      marginTop: 20,
      width: 155,
    },
    marginLeft: 40,
    marginTop: 20,
    width: 155,
  },
  loginbtn: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 20,
      marginLeft: 10,
      width: 155,
    },
    marginTop: 20,
    marginLeft: 10,
    width: 155,
  },
}));

function Signup() {
  const classes = useStyles();
  return (
    <div class={classes.root}>
      <Navbar />
      <Paper className={classes.signup} elevation={0}>
        <Typography className={classes.create}>Create Account</Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.eminput}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.eminput}
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.eminput}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.eminput}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
          />
          <Button
            className={classes.signupbtn}
            variant="contained"
            color="primary"
            href="#outlined-buttons"
            size="small"
          >
            Signup
          </Button>
          <Button
            className={classes.loginbtn}
            variant="outlined"
            color="primary"
            href="#outlined-buttons"
            size="small"
          >
            Login
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
}

export default Signup;
