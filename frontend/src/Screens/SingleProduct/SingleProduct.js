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
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
      marginLeft: 25,
    },
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    marginLeft: 25,
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
    width: 90,
    height: 90,
    marginLeft: 5,
    marginTop: 15,
    display: "inline-block",

    background: "pink",
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
    width: 325,
    height: 325,
    marginLeft: 34,
    marginTop: 30,
    align: "center",

    background: "black",
  },
  firstpaper: {
    [theme.breakpoints.up("sm")]: {
      width: 325,
      marginTop: 0,
      marginLeft: 40,
      marginRight: 40,
    },
    marginLeft: 10,
  },
  secondpaper: {
    [theme.breakpoints.up("sm")]: {
      width: 425,
      height: 350,
      marginTop: 0,
    },
    width: 425,
    height: 350,
    marginTop: 5,
  },
  thirdpaper: {
    [theme.breakpoints.up("sm")]: {
      width: 400,
      height: 320,
      marginLeft: 20,
      marginTop: 25,
    },
    width: 500,
    height: 250,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
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
    [theme.breakpoints.up("sm")]: {
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
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 550,
    padding: 3,
    fontSize: 25,
    marginLeft: 20,
    marginRight: 5,
    color: "black",
    marginTop: 1,
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
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState("");
  const [value, setValue] = React.useState(0);

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  const handleColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container spacing={1} className={classes.allgrids}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.firstpaper} elevation={0}>
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
          <Paper className={classes.secondpaper} elevation={0}>
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
          <Paper className={classes.thirdpaper} elevation={3}>
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
              <InputLabel id="demo-mutiple-name-label">Size</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value={size}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value={"XLL"}>XL</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"XLL"}>S</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-name-label">Color</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value={color}
                onChange={handleColor}
                input={<Input />}
              >
                <MenuItem value={"XLL"}>Red</MenuItem>
                <MenuItem value={"L"}>Blue</MenuItem>
                <MenuItem value={"M"}>Green</MenuItem>
                <MenuItem value={"XLL"}>Blue</MenuItem>
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
      <Box border={1}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleTabs}
            aria-label="simple tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      /
      <Footer />
    </div>
  );
}

export default SingleProduct;
