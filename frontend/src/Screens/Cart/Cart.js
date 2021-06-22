import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

var count = 1;

const columns: GridColDef[] = [
  { field: "id", headerName: " ", width: 30 },
  {
    field: "img",
    headerName: " Image",
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
  datagrid: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 100,
      marginLeft: 50,
      width: 900,
    },
  },
}));
function Cart() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.datagrid}>
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
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
