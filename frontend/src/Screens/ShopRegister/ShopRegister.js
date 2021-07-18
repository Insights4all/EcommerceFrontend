import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Input } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

function ShopRegister() {
  const classes = useStyles();
  const [shopname, setshopname] = useState("");
  const [shopemail, setshopemail] = useState("");
  const [shopcontact, setshopcontact] = useState();
  const [shopaddress, setshopaddress] = useState("");
  const [shoppassword, setshoppassword] = useState("");
  const [shopinstagram, setshopinstagram] = useState("");
  const [shopfacebook, setshopfacebook] = useState("");
  const [shoptype, setshoptype] = useState("");

  const [ownername, setownername] = useState("");
  const [owneremail, setowneremail] = useState("");
  const [ownercontact, setownercontact] = useState("");
  const [owneradress, setowneraddress] = useState("");

  const history = useHistory();
  const handletype = (event) => {
    setshoptype(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Paper className={classes.signup} elevation={0}>
        <Typography className={classes.create}>Create Account</Typography>
        <form className={classes.root} noValidate>
          <TextField
            className={classes.input}
            id="name"
            label="Full Name"
            variant="outlined"
            size="small"
            value={shopname}
            onChange={(e) => setshopname(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            value={shopemail}
            onChange={(e) => setshopemail(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="contact"
            label="Contact"
            variant="outlined"
            size="small"
            value={shopcontact}
            onChange={(e) => setshopcontact(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="address"
            label="Address"
            variant="outlined"
            size="small"
            value={shopaddress}
            onChange={(e) => setshopaddress(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            value={shoppassword}
            onChange={(e) => setshoppassword(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="instagram"
            label="Instagram Id"
            variant="outlined"
            size="small"
            value={shopinstagram}
            onChange={(e) => setshopinstagram(e.target.value)}
          />
          <TextField
            className={classes.eminput}
            id="facebook"
            label="Facebook"
            variant="outlined"
            size="small"
            value={shopfacebook}
            onChange={(e) => setshopfacebook(e.target.value)}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Size</InputLabel>
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
              <MenuItem value={"Food"}>Food </MenuItem>
              <MenuItem value={"Health"}>Health</MenuItem>
              <MenuItem value={"Beauty"}>Beauty</MenuItem>
              <MenuItem value={"Beauty"}>Beauty</MenuItem>
              <MenuItem value={"Beauty"}>Beauty</MenuItem>
              <MenuItem value={"Beauty"}>Beauty</MenuItem>c
            </Select>
          </FormControl>

          <Button
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
          </Button>
        </form>
      </Paper>
      <Footer />
    </div>
  );
}

export default ShopRegister;
