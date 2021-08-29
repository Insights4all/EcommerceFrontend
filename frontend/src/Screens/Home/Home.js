import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Product from "../Product";
import EachCategory from "../EachCategory/EachCategory";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
//import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    flexGrow: 1,
    backgroundColor: "white",
  },

  content: {
    padding: theme.spacing(0),
    width: "100%",
  },
  control: {
    padding: theme.spacing(3),
  },
  offerbox: {
    [theme.breakpoints.up("sm")]: {
      height: "23%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: `calc(100vw + 48px)`,
      padding: 200,

      marginTop: 60,
      backgroundImage: `url(${"https://www.sbicard.com/sbi-card-en/assets/media/images/personal/offers/categories/shopping/jc-brother/d-jc-brother.jpg"})`,
    },

    height: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `calc(100vw + 48px)`,

    marginTop: 60,
    backgroundImage: `url(${"https://www.sbicard.com/sbi-card-en/assets/media/images/personal/offers/categories/shopping/jc-brother/d-jc-brother.jpg"})`,
  },
  textstyle: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    padding: 5,

    marginLeft: 5,
    marginRight: 5,
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
  links: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 200,
    padding: 5,

    marginLeft: 5,
    marginRight: 5,
  },
  icon: {
    padding: 10,
  },
  categorygrid: {
    marginTop: 10,
    backgroundColor: "#eeeeee",
  },
  shopregister: {
    marginLeft: 50,
    marginRight: 10,
  },

  shoplogin: {
    marginLeft: 50,
    marginRight: 10,
  },
}));

function Home(props) {
  const classes = useStyles();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProduct();
  }, []);

  function getAllProduct() {
    axios
      .get("http://localhost:8080/getproduct")
      .then((response) => {
        const data = response.data;
        setProducts(data);
      })
      .catch((error) => {
        console.log("Erroorrrr");
      });
  }

  console.log("My Products", products);

  // useEffect(() => {
  //   checklogin();
  //   console.log("Home props", props);
  // }, [props]);

  // function checklogin() {
  //   axios
  //     .get("/checklogin")
  //     .then((response) => {
  //       if (response.data["status"] === "Yes") {
  //         console.log(response.data["status"]);
  //         // setIsLoggedIn(true);
  //         localStorage.setItem("isLoggedin", true);

  //         setusername(response.data["fullname"]);
  //       } else {
  //         console.log(response.data["status"]);
  //         //setIsLoggedIn(false);
  //         localStorage.setItem("isLoggedin", false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Erroorrrr");
  //     });
  //   console.log("Local storage value", localStorage.getItem("isLoggedin"));
  // }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar data={localStorage.getItem("isLoggedin")} />
      <main className={classes.content}>
        <Box width={1} bgcolor="grey.300" className={classes.offerbox}>
          <div className={classes.shopregister}>
            <Button variant="outlined" href="/shopregister">
              SHOP REGISTER
            </Button>
            <Button
              variant="outlined"
              href="/shoplogin"
              className={classes.shoplogin}
            >
              SHOP LOGIN
            </Button>
          </div>
        </Box>

        <div className={classes.toolbar}>
          <Typography className={classes.headings}>Top Categories</Typography>
          <Divider variant="middle" />
        </div>

        <Grid className={classes.categorygrid}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1}>
              <EachCategory />
              <EachCategory />
              <EachCategory />
              <EachCategory />
              <EachCategory />
              <EachCategory />
              <EachCategory />
              <EachCategory />
              <EachCategory />
              <EachCategory />
            </Grid>
          </Grid>
        </Grid>

        <div className={classes.toolbar}>
          <Typography className={classes.headings}>Best Seller</Typography>
          <Divider variant="middle" />
        </div>

        <Grid className={classes.product}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {products.map((x) => (
                <Product
                  key={x._id}
                  product_title={x.name}
                  original_price={x.price}
                  discount_price={x.discountPrice}
                  discount={x.percentageDiscount}
                  images={x.images}
                  product_id={x._id}
                  colors={x.colors}
                  about={x.about}
                  details={x.details}
                  size={x.size}
                  store_id={x.storeid}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Footer />
      </main>
    </div>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;
