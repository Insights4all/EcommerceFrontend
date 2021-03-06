import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Grid, List, Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { blue } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
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
  featuresbox: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 150,
      marginRight: 150,
      marginTop: 50,
      background: blue,
    },
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    background: blue,
  },
  headings: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 600,
      padding: 5,
      fontSize: 30,
      marginLeft: 30,
      color: "#f50057",
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
}));

function SingleProduct(props) {
  const classes = useStyles();
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState("");
  const [value, setValue] = React.useState(0);

  const [productdata, setProductdata] = React.useState([]);
  const [product_id, setproductid] = React.useState(props.location.state);
  const [images, setImages] = React.useState([]);
  const [mainimage, setmainimage] = React.useState("");
  const [maincolors, setmaincolors] = React.useState("");
  const [mainsize, setmainsize] = React.useState("");
  const [userid, setuserid] = React.useState(localStorage.getItem("userid"));
  console.log("Single product props", props);

  const handleSubmit = (data) => {
    props.AddToCart(productdata);
    props.AddToCartApi(productdata);
    console.log("Cart data", props.cartData.data);
    productdata.productid = productdata._id;
    axios({
      url: "http://localhost:8080/addcartdata",
      method: "POST",
      data: productdata,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/geteachproduct/${product_id}`)
      .then((response) => {
        const data = response.data;

        setProductdata(data, userid);
        productdata.userid = userid;

        setImages(data.images);

        setmaincolors(data.colors);

        setmainsize(data.size);

        setmainimage(data.images[0]);
      })
      .catch((error) => {
        console.log("Erroorrrr");
      });
  }, []);
  productdata.userid = userid;
  console.log("Prodcut data", productdata);

  //   imagesToRender = images.map((item) => {
  //     return (
  //       <div>
  //         <Box className={classes.mybox} border={1}>
  //           <img width="90px" height="90px" alt="myimage" src={item} />
  //         </Box>
  //       </div>
  //     );
  //   });
  // } else {
  //   imagesToRender = "Loading...";
  // }

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setSize(event.target.value);
    productdata.size = size;
  };
  const handleColor = (event) => {
    setColor(event.target.value);
    productdata.colors = color;
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container spacing={1} className={classes.allgrids}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.firstpaper} elevation={0}>
            {images
              ? images.map((x) => {
                  return (
                    <Box className={classes.mybox} border={1}>
                      <img width="90px" height="90px" alt="myimage" src={x} />
                    </Box>
                  );
                })
              : "Loading..."}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.secondpaper} elevation={0}>
            <Box className={classes.mainbox} border={1}>
              <img width="325px" height="325px" alt="myimage" src={mainimage} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.thirdpaper} elevation={3}>
            <Typography className={classes.productname}>
              {productdata.name}
            </Typography>
            <Typography className={classes.price}>
              {productdata.discountPrice}
              <span className={classes.cancelprice}>
                <del>???{productdata.price}</del>
              </span>
              <span className={classes.offerprice}>
                {" "}
                | {productdata.percentageDiscount}% off
              </span>
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
                {mainsize
                  ? mainsize.map((x) => {
                      return <MenuItem value={x}>{x}</MenuItem>;
                    })
                  : "Loading..."}
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
                {maincolors
                  ? maincolors.map((x) => {
                      return <MenuItem value={x}>{x}</MenuItem>;
                    })
                  : "Loading..."}
              </Select>
            </FormControl>

            <Button
              variant="outlined"
              color="primary"
              className={classes.addtocart}
              onClick={() => {
                handleSubmit(productdata);
              }}
            >
              Add to Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Box border={1} borderColor="grey.500" className={classes.featuresbox}>
        <AppBar position="static" color="inherit">
          <Tabs
            value={value}
            onChange={handleTabs}
            aria-label="simple tabs example"
          >
            <Tab label="About" {...a11yProps(1)} />
            <Tab label="Description" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Typography>{productdata.about}</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {productdata.details}
        </TabPanel>
      </Box>

      <Typography className={classes.headings}>See more Products</Typography>
      <Divider variant="middle" />

      <Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}></Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default SingleProduct;
