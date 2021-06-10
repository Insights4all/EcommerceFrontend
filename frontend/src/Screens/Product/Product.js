import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
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
}));
function Product() {
  const classes = useStyles();
  return (
    <Grid item>
      <Paper className={classes.productpaper} elevation={3}>
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
          ₹553 | <del style={{ color: "#616161" }}>₹653</del> | 14% off
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
  );
}

export default Product;
