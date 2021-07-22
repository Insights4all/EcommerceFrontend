import React, { useState } from 'react'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import useForm from '../Utils/useForm';

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
 
  }));

const ShopOwnerInput = (props) => {
    const classes = useStyles();
    const [shopname, setshopname] = useState("");
  const [shopemail, setshopemail] = useState("");
  const [shopcontact, setshopcontact] = useState();
  const [shoppassword, setshoppassword] = useState("");


  const handleSubmit = () => {
    console.log("userValue", userValue);
    props.verifyStep(2);
    props.getData(userValue);
    props.submit(userValue)

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
              <TextField
                className={classes.eminput}
                id="password"
                label="Password"
                variant="outlined"
                size="small"
                // value={shoppassword}
                // onChange={(e) => setshoppassword(e.target.value)}
                onChange={(e) =>
                    onLoginChange({ name: "owner_password", value: e.target.value })
                  }
              />
              <TextField
                className={classes.eminput}
                id="password"
                label="Confirm Password"
                variant="outlined"
                size="small"
                // value={shoppassword}
                // onChange={(e) => setshoppassword(e.target.value)}
                onChange={(e) =>
                    onLoginChange({ name: "owner_confirm_password", value: e.target.value })
                  }
              />
              <br />

              {/* <Button
                className={classes.signupbtn}
                variant="contained"
                color="primary"
                size="small"
                type="submit"
              >
                Register
              </Button>
              <Button
                className={classes.loginbtn}
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
                size="small"
              >
                Login
              </Button> */}
              <br />
              <br />
            </form>
          </Paper>
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
        </Box>
        </div>
    )
}

export default ShopOwnerInput
