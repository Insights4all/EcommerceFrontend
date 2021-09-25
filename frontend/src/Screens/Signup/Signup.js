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
import useForm from "../../Utils/useForm";

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

function Signup(props) {
  const classes = useStyles();
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState(null);
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  console.log("signup", props);
  React.useEffect(() => {
    if (Object.keys(props.customer_register_Data.data).length) {
      history.push("/login");
    }
  }, [props]);

  const handleSubmit = () => {
    console.log("userValue", userValue);
    props.UserRegister(userValue);
  };

  const validate = (values) => {
    let errors = {};
    console.log("validations", values);
    console.log("errors", typeof errors, Object.keys(userValueErrors).length);

    return errors;
  };
  const {
    values: userValue,
    errors: userValueErrors,
    handleChange: onSignupChange,
    handleSubmit: onSignupSubmit,
  } = useForm(handleSubmit, validate);

  return (
    <div className={classes.root}>
      <Navbar />
      <Paper className={classes.signup} elevation={0}>
        <Typography className={classes.create}>Create Account</Typography>
        <form className={classes.root}>
          <TextField
            className={classes.input}
            id="name"
            label="Full Name"
            variant="outlined"
            size="small"
            onChange={(e) =>
              onSignupChange({ name: "fullName", value: e.target.value })
            }
          />
          <TextField
            className={classes.eminput}
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            onChange={(e) =>
              onSignupChange({ name: "email", value: e.target.value })
            }
          />
          <TextField
            className={classes.eminput}
            id="contact"
            label="Contact"
            variant="outlined"
            size="small"
            onChange={(e) =>
              onSignupChange({ name: "contact", value: e.target.value })
            }
          />
          {/* <TextField
            className={classes.eminput}
            id="address"
            label="Address"
            variant="outlined"
            size="small"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          /> */}
          <TextField
            className={classes.eminput}
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            onChange={(e) =>
              onSignupChange({ name: "password", value: e.target.value })
            }
          />
          <Button
            className={classes.signupbtn}
            variant="contained"
            color="primary"
            size="small"
            // type="submit"
            onClick={handleSubmit}
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
