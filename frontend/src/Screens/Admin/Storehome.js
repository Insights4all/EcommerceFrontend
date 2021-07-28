import { Box, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  numberpaper: {
    [theme.breakpoints.up("sm")]: {
      padding: 15,
      width: 150,
    },
  },
  numberbox: {
    [theme.breakpoints.up("sm")]: {},
  },
  totaltext: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 800,
      padding: 1,
      fontSize: 17,
      color: "black",
      marginLeft: 10,
      marginTop: 2,
    },
  },
  numbertext: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 800,
      padding: 1,
      fontSize: 25,
      color: "black",
      marginLeft: 10,
      marginTop: 2,
    },
  },
  neworders: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 800,
      padding: 1,
      fontSize: 22,
      color: "black",
      marginLeft: 35,
      marginTop: 2,
    },
  },
  divider: {
    [theme.breakpoints.up("sm")]: {
      height: 2,
      width: 200,
      marginLeft: 30,
    },
  },
  datagrid: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 40,
      width: 1100,
      display: "inline-block",
    },
  },
}));
function Storehome() {
  const classes = useStyles();
  const [status, setStatus] = useState("Pending");
  const columns: GridColDef[] = [
    { field: "id", headerName: "Order Id", width: 130 },
    {
      field: "img",
      headerName: "Product Name",
      width: 250,
    },
    {
      field: "productPrice",
      headerName: "Product Price",
      width: 300,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 200,
    },

    {
      field: "customerName",
      headerName: "Customer Name",
      width: 300,
    },
    {
      field: "customerContact",
      headerName: "Customer Contact",
      width: 200,
    },
    {
      field: "customeraddress",
      headerName: "Shipping Address",
      width: 400,
    },
    {
      field: "paymentmode",
      headerName: "Payment Mode",
      width: 400,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const changestatus = (e) => {
          e.preventDefault();
          setStatus("Successfull");
        };

        return (
          <div>
            <ButtonGroup>
              <Button>{status}</Button>
              <Button onClick={changestatus}>✓</Button>
            </ButtonGroup>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: "1",
      img: "abcd",
      productName: "Snowhedhhh",
      price: 599,
    },
    { id: "2", img: "abcd", productName: "Lannister", price: 599 },
    { id: "3", img: "abcd", productName: "Lannister", price: 599 },
    { id: "4", img: "abcd", productName: "Lannister", price: 599 },
    { id: "5", img: "abcd", productName: "Lannister", price: 599 },
  ];
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <Box p={2}>
          <Paper className={classes.numberpaper}>
            <Typography className={classes.totaltext}>Categories</Typography>
            <Typography className={classes.numbertext}>5</Typography>
          </Paper>
        </Box>

        <Box p={2}>
          <Paper className={classes.numberpaper}>
            <Typography className={classes.totaltext}>
              Total Products
            </Typography>
            <Typography className={classes.numbertext}>52</Typography>
          </Paper>
        </Box>
        <Box p={2} className={classes.numberbox}>
          <Paper className={classes.numberpaper}>
            <Typography className={classes.totaltext}>Total Orders</Typography>
            <Typography className={classes.numbertext}>52</Typography>
          </Paper>
        </Box>
        <Box p={2}>
          <Paper className={classes.numberpaper}>
            <Typography className={classes.totaltext}>
              Pending Orders
            </Typography>
            <Typography className={classes.numbertext}>20</Typography>
          </Paper>
        </Box>
      </Box>
      <div>
        <Typography className={classes.neworders}>Pending Orders</Typography>
        <Divider className={classes.divider} />
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
            rowHeight={55}
            wrapText="true"
            getRowId={(r) => r.id}
          />
        </Box>
      </div>
    </div>
  );
}

export default Storehome;
