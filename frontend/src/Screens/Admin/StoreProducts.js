import { Box, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddProduct from "./AddProduct";

const useStyles = makeStyles((theme) => ({
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
  addproductbtn: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 20,
      marginBottom: 20,
    },
  },
}));
function StoreProducts(props) {
  const classes = useStyles();
  const [addproduct, setAddproduct] = React.useState(false);
  const columns: GridColDef[] = [
    { field: "id", headerName: "Product Id", width: 150 },
    {
      field: "name",
      headerName: "Product Name",
      width: 250,
    },
    {
      field: "productmrp",
      headerName: "MRP",
      width: 150,
    },
    {
      field: "discount",
      headerName: "Discount Price",
      width: 180,
    },
    {
      field: "percentage",
      headerName: "Percentage Off",
      width: 200,
    },

    {
      field: "size",
      headerName: "Available Size",
      width: 200,
    },
    {
      field: "color",
      headerName: "Colors",
      width: 200,
    },
    {
      field: "features",
      headerName: "Features",
      width: 200,
    },
    {
      field: "about",
      headerName: "About",
      width: 200,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "update",
      headerName: " ",
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const changestatus = (e) => {
          e.preventDefault();
        };

        return (
          <div>
            <ButtonGroup>
              <Button>Edit</Button>
              <Button onClick={changestatus}>Delete</Button>
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

  function settrue() {
    setAddproduct(true);
  }

  return (
    <div>
      <Box className={classes.datagrid}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.addproductbtn}
          onClick={settrue}
        >
          Add New Product
        </Button>
        {addproduct ? <AddProduct /> : " "}
        <Typography className={classes.neworders}>All Products</Typography>
        <Divider className={classes.divider} />

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
  );
}

export default StoreProducts;
