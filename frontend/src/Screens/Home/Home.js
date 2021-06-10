import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    flexGrow: 1,
  },

  content: {
    padding: theme.spacing(0),
    width: "100%",
  },
  control: {
    padding: theme.spacing(3),
  },
  offerbox: {
    width: "100%",
    marginTop: 60,
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
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <Box width={1} bgcolor="grey.300" className={classes.offerbox}>
          <img
            width="100%"
            height="25%"
            alt="offer"
            src="https://www.sbicard.com/sbi-card-en/assets/media/images/personal/offers/categories/shopping/jc-brother/d-jc-brother.jpg"
          />
        </Box>

        <div className={classes.toolbar}>
          <Typography className={classes.headings}>Best Seller</Typography>
          <Divider variant="middle" />
        </div>

        <Grid className={classes.product}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
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
