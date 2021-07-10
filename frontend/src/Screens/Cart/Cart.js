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
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

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
    overflow: "hidden",
    marginTop: 150,
    height: 400,
  },
  mobileroot: {
    flexGrow: 1,
    overflow: "hidden",
    marginTop: 10,
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
    height: 190,
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
  eachproduct: {
    marginLeft: 15,
    marginRight: 35,
    width: 380,
    height: 130,
  },
  productname: {
    fontFamily: "sans-serif",
    fontWeight: 500,
    padding: 1,
    fontSize: 19,
    marginLeft: 20,
    marginTop: 15,
  },
  mobileprice: {
    fontFamily: "sans-serif",
    fontWeight: 600,
    padding: 1,
    fontSize: 16,
    marginLeft: 20,
    marginTop: 3,
  },
  mobileview: {
    display: "inline",
    overflow: "visible",
    marginTop: 10,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  formControl: {
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
      marginLeft: 25,
    },
    margin: theme.spacing(1),
    minWidth: 90,
    maxWidth: 150,
    marginLeft: 25,
  },
  quantitybtn: {
    marginTop: 7,
    marginLeft: 15,
    width: 10,
    height: 30,
  },
  delete: {
    marginLeft: 165,
    marginTop: 2,
  },
  proimage: {
    marginLeft: 5,
    marginTop: 5,
  },
  mobileviewpaper: {
    marginTop: 80,
    width: 380,
    height: 180,
    marginLeft: 15,
  },
  mosubtotaltext: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 500,
    padding: 5,
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  moitem: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 500,
    padding: 1,
    fontSize: 17,
    marginLeft: 28,
  },
  moprice: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 700,
    padding: 2,
    fontSize: 20,
    marginLeft: 20,
    marginTop: 3,
  },
  modivider: {
    width: 180,
    marginLeft: 30,
    marginTop: 10,
  },
  mobtn: {
    marginLeft: 23,
    marginTop: 10,

    color: "black",
    borderColor: "#81d4fa",
    backgroundColor: "#81d4fa",
  },
  btn: {
    marginLeft: 23,
    marginTop: 10,
    color: "black",
    borderColor: "#81d4fa",
    backgroundColor: "#81d4fa",
  },
}));
function Cart() {
  const classes = useStyles();
  const [c, setc] = React.useState(1);
  const increase = (event) => {
    setc(c + 1);
  };
  const decrease = (event) => {
    setc(c - 1);
  };

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
                  <Button
                    className={classes.btn}
                    variant="contained"
                    color="primary"
                    href="#outlined-buttons"
                    size="small"
                  >
                    Proceed to Checkout
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.mobileview}>
        <Paper className={classes.mobileviewpaper}>
          <Typography className={classes.mosubtotaltext}>Sub Total</Typography>
          <Typography className={classes.moitem}>4 items</Typography>
          <Divider className={classes.modivider} />
          <Typography className={classes.moprice}>INR 2,340</Typography>
          <Button
            className={classes.mobtn}
            variant="outlined"
            href="#outlined-buttons"
          >
            Proceed to Checkout
          </Button>
        </Paper>
        <Grid container className={classes.mobileroot} spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <Paper className={classes.eachproduct}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    bgcolor="background.paper"
                  >
                    <Box className={classes.proimage}>
                      <img
                        width="120px"
                        height="120px"
                        alt="product"
                        src="https://cdn.shopify.com/s/files/1/0486/7552/0664/products/rice-water-bright-cleansing-foam_180x.jpg?v=1621925486"
                      />
                    </Box>
                    <Box>
                      <Typography variant="h1" className={classes.productname}>
                        Rice water Foaming Facewash
                      </Typography>
                      <Typography variant="h1" className={classes.mobileprice}>
                        ₹ 599
                      </Typography>
                      <Box display="flex" flexDirection="row" width={50}>
                        <Box>
                          <ButtonGroup
                            className={classes.quantitybtn}
                            display="inline"
                          >
                            <Button onClick={increase}>+</Button>
                            <Button>{c}</Button>
                            <Button onClick={decrease}>-</Button>
                          </ButtonGroup>
                        </Box>
                        <Box>
                          <Button className={classes.delete} display="inline">
                            <DeleteForeverIcon style={{ fontSize: 25 }} />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.eachproduct}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    bgcolor="background.paper"
                  >
                    <Box className={classes.proimage}>
                      <img
                        width="120px"
                        height="120px"
                        alt="product"
                        src="data:image/jpeg;base64,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"
                      />
                    </Box>
                    <Box>
                      <Typography variant="h1" className={classes.productname}>
                        Rice water Foaming Facewash
                      </Typography>
                      <Typography variant="h1" className={classes.mobileprice}>
                        ₹ 599
                      </Typography>
                      <Box display="flex" flexDirection="row" width={50}>
                        <Box>
                          <ButtonGroup
                            className={classes.quantitybtn}
                            display="inline"
                          >
                            <Button onClick={increase}>+</Button>
                            <Button>{c}</Button>
                            <Button onClick={decrease}>-</Button>
                          </ButtonGroup>
                        </Box>
                        <Box>
                          <Button className={classes.delete} display="inline">
                            <DeleteForeverIcon style={{ fontSize: 25 }} />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.eachproduct}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    bgcolor="background.paper"
                  >
                    <Box className={classes.proimage}>
                      <img
                        width="120px"
                        height="120px"
                        alt="product"
                        src="https://cdn.shopify.com/s/files/1/0486/7552/0664/products/rice-water-bright-cleansing-foam_180x.jpg?v=1621925486"
                      />
                    </Box>
                    <Box>
                      <Typography variant="h1" className={classes.productname}>
                        Rice water Foaming Facewash
                      </Typography>
                      <Typography variant="h1" className={classes.mobileprice}>
                        ₹ 599
                      </Typography>
                      <Box display="flex" flexDirection="row" width={50}>
                        <Box>
                          <ButtonGroup
                            className={classes.quantitybtn}
                            display="inline"
                          >
                            <Button onClick={increase}>+</Button>
                            <Button>{c}</Button>
                            <Button onClick={decrease}>-</Button>
                          </ButtonGroup>
                        </Box>
                        <Box>
                          <Button className={classes.delete} display="inline">
                            <DeleteForeverIcon style={{ fontSize: 25 }} />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.eachproduct}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    bgcolor="background.paper"
                  >
                    <Box className={classes.proimage}>
                      <img
                        width="120px"
                        height="120px"
                        alt="product"
                        src="https://cdn.shopify.com/s/files/1/0486/7552/0664/products/rice-water-bright-cleansing-foam_180x.jpg?v=1621925486"
                      />
                    </Box>
                    <Box>
                      <Typography variant="h1" className={classes.productname}>
                        Rice water Foaming Facewash
                      </Typography>
                      <Typography variant="h1" className={classes.mobileprice}>
                        ₹ 599
                      </Typography>
                      <Box display="flex" flexDirection="row" width={50}>
                        <Box>
                          <ButtonGroup
                            className={classes.quantitybtn}
                            display="inline"
                          >
                            <Button onClick={increase}>+</Button>
                            <Button>{c}</Button>
                            <Button onClick={decrease}>-</Button>
                          </ButtonGroup>
                        </Box>
                        <Box>
                          <Button className={classes.delete} display="inline">
                            <DeleteForeverIcon style={{ fontSize: 25 }} />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
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
