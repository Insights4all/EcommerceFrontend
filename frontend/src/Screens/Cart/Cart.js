import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Box, Divider, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { height } from "@material-ui/system";

var count = 1;

const columns: GridColDef[] = [
  { field: "id", headerName: " ", width: 30 },
  {
    field: "img",
    headerName: " ",
    width: 150,
  },
  {
    field: "productName",
    headerName: "Product Name",
    width: 300,
  },

  {
    field: "Quantity",
    headerName: "Quantity",
    sortable: false,
    width: 150,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      const increase = (e) => {
        e.preventDefault();
        count = count + 1;
      };
      const decrease = (e) => {
        count = count - 1;
      };

      return (
        <div>
          <ButtonGroup>
            <Button onClick={increase}>+</Button>
            <Button>{count}</Button>
            <Button onClick={decrease}>-</Button>
          </ButtonGroup>
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "del",
    headerName: " ",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      return <Button>Delete</Button>;
    },
  },
];

const rows = [
  {
    id: 1,
    img: "abcd",
    productName: "Snowhedhhh",
    price: 599,
  },
  { id: 2, img: "abcd", productName: "Lannister", price: 599 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 150,
    height: 400,
  },
  datagrid: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 40,
      width: 900,
      display: "inline-block",
    },
  },
  paper: {
    width: 350,
    marginTop: 30,
    height: 150,
    marginLeft: 280,
  },
  subtotaltext: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 500,
      padding: 8,
      fontSize: 20,
      marginLeft: 20,
      marginTop: 40,
    },
  },
  item: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 500,
      padding: 1,
      fontSize: 17,
      marginLeft: 28,
    },
  },
  price: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 700,
      padding: 3,
      fontSize: 20,
      marginLeft: 20,
      marginTop: 10,
    },
  },
  divider: {
    width: 280,
    marginLeft: 20,
    marginTop: 10,
  },
  websiteview: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline",
    },
  },
}));
function Cart() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.websiteview}>
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              <Grid item>
                <Box className={classes.datagrid}>
                  <DataGrid
                    isRowSelectable="false"
                    isCellEditable="false"
                    rows={rows}
                    columns={columns}
                    autoHeight="true"
                    hideFooterPagination="true"
                    hideFooter="true"
                    disableSelectionOnClick="true"
                    rowsPerPageOptions={[]}
                    rowHeight={85}
                    wrapText="true"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography className={classes.subtotaltext}>
                    Sub Total
                  </Typography>
                  <Typography className={classes.item}>4 items</Typography>
                  <Divider className={classes.divider} />
                  <Typography className={classes.price}>INR 2,340</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
