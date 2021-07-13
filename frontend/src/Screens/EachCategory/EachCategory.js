import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  roots: {
    overflow: "hidden",
  },
  categorypaper: {
    [theme.breakpoints.up("sm")]: {
      width: 200,
      height: 210,
      marginBottom: 20,
      backgroundColor: "transparent",
    },
    width: 150,
    height: 180,
    marginBottom: 20,

    backgroundColor: "transparent",
  },
  categorybox: {
    [theme.breakpoints.up("sm")]: {
      width: 220,
      heigth: 100,
      background: lightBlue,
    },
    width: 150,
    heigth: 150,
  },
  categoryname: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    align: "center",
    fontSize: 20,
  },
  categoryimg: {
    [theme.breakpoints.up("sm")]: {
      width: "70%",
      heigth: "160px",
      background: lightBlue,
    },
    width: "100%",
    heigth: "100%",
  },
}));
function EachCategory() {
  const classes = useStyles();
  return (
    <Grid item>
      <Paper className={classes.categorypaper} elevation={0}>
        <Box
          className={classes.categorybox}
          p={1}
          border={0}
          borderRadius="50%"
          elevation={2}
          borderColor="primary.main"
        >
          <Link href="/">
            <img
              className={classes.categoryimg}
              style={{ "border-radius": "50%" }}
              borderRadius="50%"
              alt="offer"
              src="https://i.pinimg.com/originals/d7/0a/5c/d70a5c6706698d3e58a9ea5354c5c76f.jpg"
            />
          </Link>
        </Box>
        <Typography className={classes.categoryname} align="center">
          Dresses
        </Typography>
      </Paper>
    </Grid>
  );
}

export default EachCategory;
