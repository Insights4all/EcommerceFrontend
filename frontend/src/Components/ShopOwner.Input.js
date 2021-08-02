import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "../Utils/useForm";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  signup: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 50,
      width: 450,
    },
    marginTop: 0,
    width: 350,
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
    marginLeft: 10,
  },
  input: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 20,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 20,
  },
  buttonContainer:{
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 20,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 20,
  },
  eminput: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 15,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 15,
  },
  signupbtn: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 70,
      marginTop: 20,
      width: 155,
    },
    marginLeft: 10,
    marginTop: 10,
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
  formControl: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 20,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 20,
  },
}));

const ShopOwnerInput = (props) => {
  const classes = useStyles();
  const [shopname, setshopname] = useState("");
  const [shopemail, setshopemail] = useState("");
  const [shopcontact, setshopcontact] = useState();
  const [shoppassword, setshoppassword] = useState("");

  const handleSubmit = () => {
    console.log("userValue", userValue);
    props.submit(userValue);

    props.verifyStep(2);
    // props.getData();
    // props.submit(userValue);
  };

  const validate = (values) => {
    let errors = {};
  
    if(!values.owner_name){
      errors.owner_name="Required"
    }
    if(!values.owner_email){
      errors.owner_email="Required"
    }
    if(!values.owner_contact){
      errors.owner_contact="Required"
    }

    return errors;
  };
  const {
    values: userValue,
    errors: userValueErrors,
    handleChange: onLoginChange,
    handleSubmit: onLoginSubmit,
  } = useForm(handleSubmit, validate);

  // const [shopname, setshopname] = useState("");

  return (
    <div>
      <Box p={1}>
        <Paper className={classes.signup} elevation={0}>
          <Typography className={classes.create}>Owner Details</Typography>
          <form className={classes.root}>
            <TextField
              className={classes.input}
              id="name"
              label="Full Name"
              variant="outlined"
              size="small"
              // value={shopname}
              // onChange={(e) => setshopname(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "owner_name", value: e.target.value })
              }
            />
             {
              userValueErrors.owner_name ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.owner_name} </Typography> : null
            }
            <TextField
              className={classes.eminput}
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              // value={shopemail}
              // onChange={(e) => setshopemail(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "owner_email", value: e.target.value })
              }
            />
             {
              userValueErrors.owner_email ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.owner_email} </Typography> : null
            }
            <TextField
              className={classes.eminput}
              id="contact"
              label="Contact"
              variant="outlined"
              size="small"
              // value={shopcontact}
              // onChange={(e) => setshopcontact(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "owner_contact", value: e.target.value })
              }
            />
             {
              userValueErrors.owner_contact ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.owner_contact} </Typography> : null
            }
            <br />
            <br />
            <br />
          </form>
        </Paper>
        <div
          className={classes.buttonContainer}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => props.verifyStep(0)}
            style={{ marginRight: 20 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onLoginSubmit();
            }}
            className={classes.button}
          >
            Next
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default ShopOwnerInput;
