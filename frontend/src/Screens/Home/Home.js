import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import FacebookIcon from "@material-ui/icons/Facebook";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Navbar from "../Navbar/Navbar";

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
  productpaper: {
    [theme.breakpoints.up("sm")]: {
      height: 350,
      width: 220,
    },
    height: 350,
    width: 190,
  },
  control: {
    padding: theme.spacing(3),
  },
  offerbox: {
    width: "100%",
    marginTop: 60,
  },
  product: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
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
  price: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      padding: 4,
      color: "#f50057",
      fontSize: 18,
      marginLeft: 5,
      marginRight: 5,
    },
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400,
    padding: 4,
    color: "#f50057",
    marginLeft: 5,
    marginRight: 5,
    fontSize: 17,
  },
  addtocart: {
    padding: 4,
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
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
  footeritem: {
    marginLeft: 3,
    width: "360px",
    padding: 10,
    spacing: 0,
    borders: 0,
    shadows: 0,
  },
  footerpaper: {
    padding: 15,
    backgroundColor: "#81d4fa",
  },
  boxfooter: {
    marginTop: 20,
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
              <Grid item>
                <Paper className={classes.productpaper}>
                  <Box width={1} height="200px" p={1} bgcolor="grey.300">
                    <img
                      width="100%"
                      height="180px"
                      alt="offer"
                      src="data:image/jpeg;base64,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"
                    />
                  </Box>
                  <Typography className={classes.textstyle}>
                    Rice Water Bright Cleansing Foam
                  </Typography>
                  <Typography className={classes.price}>
                    ₹553 | <del style={{ color: "#616161" }}>₹653</del> | 14%
                    off
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.addtocart}
                    color="secondary"
                  >
                    Add to Cart
                  </Button>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.productpaper}>
                  <Box width={1} height="200px" p={1} bgcolor="grey.300">
                    <img
                      width="100%"
                      height="180px"
                      alt="offer"
                      src="data:image/jpeg;base64,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"
                    />
                  </Box>
                  <Typography className={classes.textstyle}>
                    Rice Water Bright Cleansing Foam
                  </Typography>
                  <Typography className={classes.price}>
                    ₹553 | <del style={{ color: "#616161" }}>₹653</del> | 14%
                    off
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.addtocart}
                    color="secondary"
                  >
                    Add to Cart
                  </Button>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.productpaper} />
              </Grid>

              <Grid item>
                <Paper className={classes.productpaper} />
              </Grid>

              <Grid item>
                <Paper className={classes.productpaper} />
              </Grid>
              <Grid item>
                <Paper className={classes.productpaper} />
              </Grid>
              <Grid item>
                <Paper className={classes.productpaper} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          bgcolor="#81d4fa"
          border={0}
          boxShadow={0}
          className={classes.boxfooter}
        >
          <Grid spacing={1}>
            <Grid container>
              <Grid className={classes.footeritem} border={0} boxShadow={0}>
                <Paper className={classes.footerpaper} elevation={0}>
                  <Typography className={classes.textstyle}>
                    ABOUT THE FACE SHOP PRODUCTS
                  </Typography>

                  <Typography className={classes.links}>
                    Founded in 2003 and headquartered in Seoul, The Face Shop is
                    inspired by nature and believes that there is natural beauty
                    to everyone. We have been in search of better nature, wading
                    through sharp thorns, into hard husks and we have added
                    great care to deliver the best for your skin which is why we
                    source over 600 natural ingredients from across 25 countries
                    across the world and marry them with Korean technology so
                    that you can be a part of our natural story.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item className={classes.footeritem}>
                <Paper className={classes.footerpaper} elevation={0}>
                  <Typography className={classes.textstyle}>MyShop</Typography>
                  <Link href="#" className={classes.links}>
                    Home
                  </Link>
                  <br />
                  <Link href="#" className={classes.links}>
                    Terms of Use
                  </Link>
                  <br />
                  <Link href="#" className={classes.links}>
                    Policies
                  </Link>
                </Paper>
              </Grid>
              <Grid item className={classes.footeritem}>
                <Paper className={classes.footerpaper} elevation={0}>
                  <Typography className={classes.textstyle}>
                    Social Media
                  </Typography>
                  <Typography className={classes.icon}>
                    <Link className={classes.links}>
                      <FacebookIcon />
                    </Link>
                    <Link className={classes.links}>
                      <InstagramIcon />
                    </Link>

                    <Link className={classes.links}>
                      <MailOutlineIcon />
                    </Link>
                  </Typography>
                  <Typography className={classes.textstyle}>
                    Address
                    <Typography paragraph>
                      509, Shah & Nahar, Off Dr. E. Moses Road, Worli, Mumbai -
                      400018 <br />
                      Contact Number: +91 80472 48727
                    </Typography>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Box>
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
