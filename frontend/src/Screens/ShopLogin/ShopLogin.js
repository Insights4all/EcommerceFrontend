import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import useForm from "../../Utils/useForm";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  signup: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 150,
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
      marginLeft: 185,
    },
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    fontSize: 22,
    padding: 20,
    marginLeft: 140,
  },
  eminput: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 15,
    },
    width: 320,
    marginLeft: 40,
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

function ShopLogin(props) {
  const classes = useStyles();
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.ShopLogin(userValue);
    //console.log("newprops", props);
  };

  React.useEffect(() => {
    console.log("useffect props", props);
    if (Object.keys(props.shop_login_Data.data).length) {
      localStorage.setItem("shopid", props.shop_login_Data.data.id);
      history.push({
        pathname: "/admin",
        state: props.shop_login_Data.data.id,
      });
      console.log(props.shop_login_Data.data.id);
      //window.location.reload();
    } else if (props.shop_login_Data.errorMessage.length) {
      setError(true);
    }
  }, [props]);

  const validate = (values) => {
    let errors = {};
    console.log("validations", values);
    console.log("errors", typeof errors, Object.keys(userValueErrors).length);
    return errors;
  };
  const {
    values: userValue,
    errors: userValueErrors,
    handleChange: onLoginChange,
    handleSubmit: onLoginSubmit,
  } = useForm(handleSubmit, validate);

  return (
    <div class={classes.root}>
      <Navbar />
      <Paper className={classes.signup} elevation={0}>
        <Typography className={classes.create}>Shop Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.eminput}
            id="email"
            label="Shop Email"
            variant="outlined"
            size="small"
            // value={loginemail}
            // onChange={(e) => setloginemail(e.target.value)}
            onChange={(e) =>
              onLoginChange({ name: "shopemail", value: e.target.value })
            }
          />
          <TextField
            className={classes.eminput}
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            // value={loginpassword}
            // onChange={(e) => setloginpassword(e.target.value)}
            onChange={(e) =>
              onLoginChange({ name: "shoppassword", value: e.target.value })
            }
          />

          {error ? (
            <p style={{ textAlign: "center", color: "red" }}>
              Error, Please Enter Valid Credentials
            </p>
          ) : null}

          <Button
            className={classes.signupbtn}
            variant="outlined"
            color="primary"
            href="/registershop"
            size="small"
          >
            Signup
          </Button>
          <Button
            className={classes.loginbtn}
            variant="contained"
            color="primary"
            type="submit"
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

export default ShopLogin;
