import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  productpaper: {
    [theme.breakpoints.up("sm")]: {
      height: 350,
      width: 220,
      marginTop: 8,
      backgroundColor: "transparent",
    },
    height: 350,
    width: 190,
  },
  mybox: {
    [theme.breakpoints.up("sm")]: {
      height: 220,

      marginTop: 8,
      backgroundColor: "transparent",
    },
    marginTop: 8,
    height: 230,
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
  myproimg: {
    [theme.breakpoints.up("sm")]: {
      height: 210,
      width: 210,
    },
    height: 210,
    width: 170,
  },
}));
function Product(props) {
  const handleSubmit = (data) => {
    props.AddToCart(data);
    props.AddToCartApi(data);
  };

  // console.log("product store", props)

  const classes = useStyles();
  return (
    <Grid item>
      <Paper className={classes.productpaper} elevation={0}>
        <Box className={classes.mybox} p={1} bgcolor="grey.300">
          <Link href="/singleproduct">
            <img
              className={classes.myproimg}
              alt="offer"
              src={props.images[0]}
            />
          </Link>
        </Box>
        <Typography className={classes.textstyle}>
          {props.product_title}
        </Typography>
        <Typography className={classes.price}>
          ₹{props.discount_price} |{" "}
          <del style={{ color: "#616161" }}>₹{props.original_price}</del> |{" "}
          {props.discount}% off
        </Typography>
        <Button
          variant="outlined"
          className={classes.addtocart}
          color="secondary"
          onClick={() => {
            handleSubmit({ name: "eyeliner", color: "black", userid: "324" });
          }}
        >
          Add to Cart
        </Button>
      </Paper>
    </Grid>
  );
}

export default Product;
