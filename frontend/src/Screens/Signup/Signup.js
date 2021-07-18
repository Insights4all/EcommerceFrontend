import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Input } from "@material-ui/core";

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
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState(0);
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      fullname: fullname,
      username: email,
      contact: contact,
      address: address,
      password: password,
    };
    console.log(payload);

    axios({
      url: "/register",
      method: "POST",
      data: payload,
    }).then((res) => console.log(res), history.push("/signup"));

    reset();
  }

  function reset() {
    setfullname("");
    setemail("");
    setcontact("");
    setaddress("");
    setpassword("");
  }

  return (
    <div class={classes.root}>
      <Navbar />
      <Paper className={classes.signup} elevation={0}>
        <Typography className={classes.create}>Create Account</Typography>
        <form onSubmit={handleSubmit} className={classes.root} noValidate>
          <TextField
            className={classes.input}
            id="name"
            label="Full Name"
            variant="outlined"
            size="small"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="contact"
            label="Contact"
            variant="outlined"
            size="small"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="address"
            label="Address"
            variant="outlined"
            size="small"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Button
            className={classes.signupbtn}
            variant="contained"
            color="primary"
            size="small"
            type="submit"
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
