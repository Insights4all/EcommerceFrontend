import { Box, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddProduct from "./AddProduct";
import axios from "axios";

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

  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    getProductData(props.shopid);
  }, []);
  function getProductData(shopid) {
    axios
      .get(`http://localhost:8080/getproductdata/${shopid}`)
      .then((response) => {
        const data = response.data;
        setProduct(data);
      })
      .catch((error) => {
        console.log("Erroorrrr");
      });
  }
  console.log("MyProduct", product);
  const length = product.length;
  console.log(length);
  const ids = [];
  for (var i = 0; i < length; i++) {
    ids[i] = i;
    product[i].id = ids[i];
  }
  console.log("Updated product", product);
  const columns: GridColDef[] = [
    { field: "id", headerName: "Product Id", width: 150 },
    {
      field: "name",
      headerName: "Product Name",
      width: 250,
    },
    {
      field: "price",
      headerName: "MRP",
      width: 150,
    },
    {
      field: "discountPrice",
      headerName: "Discount Price",
      width: 180,
    },
    {
      field: "percentageDiscount",
      headerName: "Percentage Off",
      width: 200,
    },

    {
      field: "size",
      headerName: "Available Size",
      width: 200,
    },
    {
      field: "colors",
      headerName: "Colors",
      width: 200,
    },
    {
      field: "details",
      headerName: "Details",
      width: 200,
    },
    {
      field: "about",
      headerName: "About",
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

  const rows = product;

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
        {addproduct ? <AddProduct shopid={props.shopid} /> : " "}
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
