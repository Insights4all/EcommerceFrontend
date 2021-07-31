import React, { useState } from "react";
import Admin from "./Admin";
import Storenavbar from "./Storenavbar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { Input } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MuiTableCell from "@material-ui/core/TableCell";
import firebase from "./Firebase";
import "firebase/storage"; // <----

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    [theme.breakpoints.up("sm")]: {
      minWidth: 180,
      maxWidth: 300,

      marginLeft: 10,
      marginTop: 30,
    },
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  upload: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 10,
      marginTop: 5,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 5,
  },

  root: {
    display: "flex",
    overflow: "hidden",
  },
  signup: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 10,
      width: 450,
      height: 450,
    },
    marginTop: 100,
    width: 450,
    height: 450,
  },
  table: {
    width: 500,
  },
  tablerow: {
    [theme.breakpoints.up("sm")]: {
      height: 50,
      marginLeft: 10,
    },
    width: 320,
    marginLeft: 10,
  },
  eminput: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 10,
      marginTop: 40,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 10,
  },
  label: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 10,
      marginTop: 25,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 10,
  },
  eglabel: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 10,
      marginTop: 10,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 10,
  },
  addbtn: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
      width: 155,
      marginTop: 20,
      marginBottom: 30,
    },
    marginLeft: 40,
    width: 155,
  },
  secondflex: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      marginLeft: 35,
    },
  },
}));

function AddProduct() {
  const classes = useStyles();
  const [productname, setproductname] = useState("");
  const [productprice, setproductprice] = useState("");
  const [discountprice, setdiscountprice] = useState(0);
  const [percentagediscount, setpercentagediscount] = useState("");
  const history = useHistory();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [age, setAge] = React.useState("");

  const [count, setCount] = React.useState(0);
  const [allfile, setAllfile] = React.useState([]);
  const [imageurl, setImageurl] = React.useState([]);

  const [getref, setGetref] = React.useState([]);

  const handleStock = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleFile = (event) => {
    setAllfile((allfile) => [...allfile, event.target.files[0]]);

    //  console.log("in handle file", allfile);
    setCount(count + 1);
    setImageurl((imageurl) => [
      ...imageurl,
      URL.createObjectURL(event.target.files[0]),
    ]);
  };

  const uploadImage = (event) => {
    console.log("in upload file", allfile);
    console.log("in upload file imageurl", imageurl);
    console.log(allfile.length);
    var storageRef = firebase.storage().ref();

    for (var i = 0; i < allfile.length; i++) {
      var imageref = storageRef.child(allfile[i].name);
      var uploadTask = imageref.put(allfile[i]);
    }

    uploadTask
      .then(() => {
        console.log("Image uploaded to the bucket!");

        for (var i = 0; i < allfile.length; i++) {
          var newgetref = storageRef.child(allfile[i].name).getDownloadURL();
          setGetref([...getref, newgetref]);
          console.log(getref);
        }
      })
      .catch((e) => console.log("uploading image error => ", e));
  };
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     const payload = {
  //       fullname: fullname,
  //       username: email,
  //       contact: contact,
  //       address: address,
  //       password: password,
  //     };
  //     console.log(payload);

  //     axios({
  //       url: "/register",
  //       method: "POST",
  //       data: payload,
  //     }).then((res) => console.log(res), history.push("/signup"));

  //     reset();
  //   }

  //   function reset() {
  //     setfullname("");
  //     setemail("");
  //     setcontact("");
  //     setaddress("");
  //     setpassword("");
  //   }

  return (
    <div>
      <form className={classes.root} enctype="multipart/form-data" noValidate>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              className={classes.eminput}
              id="product_name"
              label="Product Name"
              variant="outlined"
              size="small"
              value={productname}
              onChange={(e) => setproductname(e.target.value)}
            />
            <InputLabel className={classes.eglabel}>
              For eg - Pink Polka Dot Dress
            </InputLabel>
            <TextField
              className={classes.eminput}
              id="percentagediscount"
              label="Percentage Discount"
              variant="outlined"
              size="small"
              value={percentagediscount}
              onChange={(e) =>
                setpercentagediscount(e.target.percentagediscount)
              }
            />
            <InputLabel className={classes.eglabel}>For eg - 10%</InputLabel>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">
                Available Colors
              </InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              label="About Product"
              multiline
              rows={4}
              className={classes.eminput}
              defaultValue=""
              variant="outlined"
            />
            <InputLabel className={classes.label} id="demo-simple-select-label">
              Product Images
            </InputLabel>

            <Input
              className={classes.upload}
              onChange={handleFile}
              type="file"
              accept="image/*"
              multiple
            />
            <Typography>{count} files selected</Typography>
            <Button
              onClick={uploadImage}
              className={classes.addbtn}
              variant="contained"
            >
              Upload
            </Button>
            <Button
              className={classes.addbtn}
              variant="contained"
              color="primary"
              size="medium"
              type="submit"
            >
              Add Product
            </Button>
          </div>
          <div className={classes.secondflex}>
            <TextField
              className={classes.eminput}
              id="productprice"
              label="Product Price"
              variant="outlined"
              size="small"
              value={productprice}
              onChange={(e) => setproductprice(e.target.productprice)}
            />
            <InputLabel className={classes.eglabel}>For eg - 600</InputLabel>
            <TextField
              className={classes.eminput}
              id="discountprice"
              label="Discount Price"
              variant="outlined"
              size="small"
              value={discountprice}
              onChange={(e) => setdiscountprice(e.target.discountprice)}
            />
            <InputLabel className={classes.eglabel}>
              For eg - (10/100)*600 = 540
            </InputLabel>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">
                Available Size
              </InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              label="Product Details"
              multiline
              rows={4}
              className={classes.eminput}
              defaultValue=""
              variant="outlined"
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Stock</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleStock}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
