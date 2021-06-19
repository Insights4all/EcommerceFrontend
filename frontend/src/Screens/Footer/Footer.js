import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { FormHelperText } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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

function Footer() {
  const classes = useStyles();
  return (
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
                inspired by nature and believes that there is natural beauty to
                everyone. We have been in search of better nature, wading
                through sharp thorns, into hard husks and we have added great
                care to deliver the best for your skin which is why we source
                over 600 natural ingredients from across 25 countries across the
                world and marry them with Korean technology so that you can be a
                part of our natural story.
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
  );
}
export default Footer;
