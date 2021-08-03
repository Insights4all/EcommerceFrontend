import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Product from "../Product";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Divider } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { FormLabel, FormControlLabel } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
  },
  options: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
  },
  filter: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    display: "none",
  },
  headings: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 600,
      padding: 5,
      fontSize: 30,
      marginLeft: 45,
      color: "black",
    },
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    padding: 5,
    fontSize: 27,
    marginLeft: 15,
    color: "#f50057",
  },
  section: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 75,
    },
    marginTop: 85,
  },
  firstbox: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
      overflow: "visble",
      position: "absolute",
      marginLeft: 50,
      marginTop: 10,
      padding: 15,
      width: 180,
    },
    display: "none",
  },
  secondbox: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 200,

      overflow: "hidden",
    },
    marginLeft: 10,
    overflow: "hidden",
  },
  mobilefilter: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    display: "block",
    marginTop: 10,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Categories() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const [price, setPrice] = React.useState("htl");
  const [color, setColor] = React.useState("Red");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Grid className={classes.section}>
        <Typography className={classes.headings}>Face Creames</Typography>
        <Divider variant="middle" />
        <Box border={0} className={classes.mobilefilter}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              onChange={handleColor}
            >
              <MenuItem value={10}>Red</MenuItem>
              <MenuItem value={20}>Green</MenuItem>
              <MenuItem value={30}>Blue</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              onChange={handleChange}
            >
              <MenuItem value={10}>men</MenuItem>
              <MenuItem value={20}>women</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={price}
              onChange={handlePrice}
            >
              <MenuItem value={10}>High to low</MenuItem>
              <MenuItem value={20}>low to High</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item>
              <Grid item className={classes.filter}>
                <Paper component="div" className={classes.firstbox}>
                  <Typography className={classes.text}>Gender</Typography>
                  <Divider />
                  <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Women"
                        control={<Radio />}
                        label="Women"
                      />
                      <FormControlLabel
                        value="Mens"
                        control={<Radio />}
                        label="Mens"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Typography className={classes.text}>Price</Typography>
                  <Divider />
                  <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup
                      aria-label="price"
                      name="price"
                      value={price}
                      onChange={handlePrice}
                    >
                      <FormControlLabel
                        value="hl"
                        control={<Radio />}
                        label="High to low"
                      />
                      <FormControlLabel
                        value="lh"
                        control={<Radio />}
                        label="Low to high"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Typography className={classes.text}>Color</Typography>
                  <Divider />
                  <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup
                      aria-label="color"
                      name="color"
                      value={color}
                      onChange={handleColor}
                    >
                      <FormControlLabel
                        value="red"
                        control={<Radio />}
                        label="Red"
                      />
                      <FormControlLabel
                        value="green"
                        control={<Radio />}
                        label="Green"
                      />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Grid>

              <Grid className={classes.secondbox}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={2}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Categories;
