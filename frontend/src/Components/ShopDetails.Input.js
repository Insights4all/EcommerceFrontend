import { FormControl } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import useForm from "../Utils/useForm";

// import Typography from "@material-ui/core/Typography";
// import Typography from "@material-ui/core/Typography";

import React, { useState } from "react";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formbox: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 90,
      marginLeft: 120,
      display: "flex",
      flexDirection: "row",
    },
    marginTop: 90,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
  },
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
  formControl: {
    [theme.breakpoints.up("sm")]: {
      width: 200,
      marginLeft: 70,
    },
    width: 200,
    marginLeft: 10,
    marginTop: 10,
  },
}));

const ShopDetailsInput = (props) => {
  const classes = useStyles();
  const [shopname, setshopname] = useState("");
  const [shopemail, setshopemail] = useState("");
  const [shopcontact, setshopcontact] = useState();
  const [shopaddress, setshopaddress] = useState("");
  const [shopinstagram, setshopinstagram] = useState("");
  const [shopfacebook, setshopfacebook] = useState("");
  const [shoptype, setshoptype] = useState("");

  const handleSubmit = () => {
    console.log("userValue", userValue);
    props.verifyStep(1);
    // props.getData(userValue)
    props.submit(userValue);
  };
  // console.log("Child props", props)

  const handletype = (event) => {
    setshoptype(event.target.value);
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

  return (
    <div>
      <Box p={1}>
        <Paper className={classes.signup} elevation={0}>
          <Typography className={classes.create}>Shop Details</Typography>
          <form className={classes.root}>
            <TextField
              className={classes.input}
              id="name"
              label="Shop Name"
              variant="outlined"
              size="small"
              // value={shopname}
              // onChange={(e) => setshopname(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_name", value: e.target.value })
              }
            />
            <TextField
              className={classes.eminput}
              id="contact"
              label="Shop Contact"
              variant="outlined"
              size="small"
              // value={shopcontact}
              // onChange={(e) => setshopcontact(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_contact", value: e.target.value })
              }
            />
            <TextField
              className={classes.eminput}
              id="address"
              label="Shop Address"
              variant="outlined"
              size="small"
              // value={shopaddress}
              // onChange={(e) => setshopaddress(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_address", value: e.target.value })
              }
            />
            <TextField
              className={classes.eminput}
              id="instagram"
              label="Business Instagram Id"
              variant="outlined"
              size="small"
              // value={shopinstagram}
              // onChange={(e) => setshopinstagram(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_insta_id", value: e.target.value })
              }
            />
            <TextField
              className={classes.eminput}
              id="facebook"
              label="Business Facebook"
              variant="outlined"
              size="small"
              // value={shopfacebook}
              // onChange={(e) => setshopfacebook(e.target.value)}
              onChange={(e) =>
                onLoginChange({
                  name: "shop_facebook_id",
                  value: e.target.value,
                })
              }
            />

            <br />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-name-label">Shop Type</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value={shoptype}
                onChange={handletype}
                input={<Input />}
              >
                <MenuItem value={"Automotive"}>Automotive</MenuItem>
                <MenuItem value={"Baby & Toddler"}>Baby & Toddler</MenuItem>
                <MenuItem value={"Clothing & Shoes"}>Clothing & Shoes</MenuItem>
                <MenuItem value={"Entertainment & Art"}>
                  Entertainment & Art
                </MenuItem>
                <MenuItem value={"Electronics"}>Electronics</MenuItem>
                <MenuItem value={"Food"}>Food</MenuItem>
                <MenuItem value={"Gifts"}>Gifts</MenuItem>
                <MenuItem value={"Health"}>Health</MenuItem>
                <MenuItem value={"Beauty"}>Beauty</MenuItem>
                <MenuItem value={"Home & Graden"}>Home & Graden</MenuItem>
                <MenuItem value={"Office & Professional Services"}>
                  Office & Professional Services
                </MenuItem>
                <MenuItem value={"Personal & Home Services"}>
                  Personal & Home Services
                </MenuItem>
                <MenuItem value={"Restaurants & Dining"}>
                  Restaurants & Dining
                </MenuItem>
                <MenuItem value={"Sports & Outdoors"}>
                  Sports & Outdoors
                </MenuItem>
                <MenuItem value={"Travel"}>Travel</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-multiline-static"
              label="About Shop"
              multiline
              rows={4}
              className={classes.eminput}
              defaultValue=""
              variant="outlined"
            />
            <br />
            <TextField
              className={classes.eminput}
              id="contact"
              label="Business Tag Line"
              variant="outlined"
              size="small"
              // value={shopcontact}
              // onChange={(e) => setshopcontact(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_contact", value: e.target.value })
              }
            />

            <br />
            <br />
            <InputLabel
              className={classes.eminput}
              id="demo-simple-select-label"
            >
              Business logo
            </InputLabel>

            <Input type="file" className={classes.eminput} />
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
  );
};

export default ShopDetailsInput;
