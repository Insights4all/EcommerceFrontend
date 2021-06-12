import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },

  allgrids: {
    marginTop: 70,
  },
  mybox: {
    [theme.breakpoints.up("sm")]: {
      width: 90,
      height: 90,
      marginLeft: 150,
      marginTop: 5,

      background: "black",
    },
  },

  mainbox: {
    [theme.breakpoints.up("sm")]: {
      width: 325,
      height: 325,
      marginLeft: 1,
      marginTop: 30,
      align: "center",

      background: "black",
    },
  },
  firstpaper: {
    [theme.breakpoints.up("sm")]: {
      width: 325,
      marginTop: 0,
      marginLeft: 40,
      marginRight: 40,
    },
  },
  secondpaper: {
    [theme.breakpoints.up("sm")]: {
      width: 325,
      height: 350,
      marginTop: 0,
    },
  },
  thirdpaper: {
    [theme.breakpoints.up("sm")]: {
      width: 500,
      height: 350,
      marginLeft: 20,
      marginTop: 25,
    },
  },
  productname: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    padding: 20,
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  price: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400,
    padding: 5,
    fontSize: 22,
    marginLeft: 20,
    marginRight: 5,
    color: "black",
    marginTop: 2,
  },
  cancelprice: {
    color: "grey",
    fontSize: 16,
  },
  offerprice: {
    marginLeft: 10,
    color: "red",
    fontSize: 19,
  },
  addtocart: {
    marginLeft: 20,
    marginTop: 20,
    width: 300,
  },
}));

function SingleProduct() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />

      <Grid container spacing={1} className={classes.allgrids}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.firstpaper}>
            <Box className={classes.mybox} border={1}>
              <img
                width="90px"
                height="90px"
                src="https://cdn.shopify.com/s/files/1/0486/7552/0664/products/rice-water-bright-cleansing-foam_180x.jpg?v=1621925486"
              />
            </Box>
            <Box className={classes.mybox} border={1}>
              <img
                width="90px"
                height="90px"
                src="https://cdn.shopify.com/s/files/1/0486/7552/0664/products/rice-water-bright-cleansing-foam_180x.jpg?v=1621925486"
              />
            </Box>
            <Box className={classes.mybox} border={1}>
              <img
                width="90px"
                height="90px"
                src="https://cdn.shopify.com/s/files/1/0486/7552/0664/products/rice-water-bright-cleansing-foam_180x.jpg?v=1621925486"
              />
            </Box>

            <Box className={classes.mybox} border={1}>
              <img
                width="90px"
                height="90px"
                src="https://cdn.shopify.com/s/files/1/0486/7552/0664/products/rice-water-bright-cleansing-foam_180x.jpg?v=1621925486"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.secondpaper}>
            <Box className={classes.mainbox} border={1}>
              <img
                width="325px"
                height="325px"
                src="https://cdn.shopify.com/s/files/1/0486/7552/0664/products/rice-water-bright-cleansing-foam_180x.jpg?v=1621925486"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.thirdpaper}>
            <Typography className={classes.productname}>
              Rice Water Bright Cleansing Foam
            </Typography>
            <Typography className={classes.price}>
              ₹599{" "}
              <span className={classes.cancelprice}>
                <del>₹650</del>
              </span>
              <span className={classes.offerprice}> | 14% off</span>
            </Typography>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value=""
                onChange=""
                input={<Input />}
              >
                <MenuItem value="XLL">XL</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="outlined"
              color="primary"
              href="#contained-buttons"
              className={classes.addtocart}
            >
              Add to Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default SingleProduct;
