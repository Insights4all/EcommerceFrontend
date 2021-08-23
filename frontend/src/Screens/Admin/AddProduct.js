import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { Input } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import firebase from "./Firebase";
import "firebase/storage"; // <----
import axios from "axios";

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

const sizenames = ["XS", "S", "M", "L", "XL", "XXL"];
const colornames = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Cyan",
  "Purple",
  "White",
  "Black",
  "Brown",
  "Magenta",
  "Tan",
  "Olive",
  "Maroon",
  "Navy",
  "Aquamarine",
  "Turquoise",
  "Silver",
  "Lime",
  "Teal",
  "Indigo",
  "Violet",
  "Pink",
  "Gray",
  "Off White",
  "Navy Blue",
  "Baby Pink",
];

function getStylesColors(names, colors, theme) {
  return {
    fontWeight:
      colors.indexOf(names) === -1
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

function AddProduct(props) {
  const classes = useStyles();
  const [productname, setproductname] = useState("");
  const [productprice, setproductprice] = useState();
  const [discountprice, setdiscountprice] = useState();
  const [percentagediscount, setpercentagediscount] = useState();
  const [aboutproduct, setAboutproduct] = useState("");
  const [productdetails, setProductdetails] = useState("");
  const [colors, setColors] = useState([]);
  const [size, setSize] = useState([]);
  const shopid = props.shopid;

  const history = useHistory();
  const theme = useTheme();

  const [count, setCount] = React.useState(0);
  const [allfile, setAllfile] = React.useState([]);
  const [imageurl, setImageurl] = React.useState([]);

  const [getref, setGetref] = React.useState([]);

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const handleColors = (event) => {
    console.log("value", event.target.value);
    setColors(event.target.value);
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
  console.log("colors", colors);
  console.log("size", size);
  const uploadImage = (event) => {
    console.log("in upload file", allfile);
    console.log("in upload file imageurl", imageurl);

    var storageRef = firebase.storage().ref();
    allfile.map(function (x) {
      var imageref = storageRef.child(x.name);
      var uploadTask = imageref.put(x);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log("Upload unsuccessful");
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            setGetref((getref) => [...getref, downloadURL]);
          });
        }
      );
    });

    // for (var i = 0; i < allfile.length; i++) {
    //   var imageref = storageRef.child(allfile[i].name);
    //   var uploadTask = imageref.put(allfile[i]);
    // }
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     // Observe state change events such as progress, pause, and resume
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log("Upload is " + progress + "% done");
    //     switch (snapshot.state) {
    //       case firebase.storage.TaskState.PAUSED: // or 'paused'
    //         console.log("Upload is paused");
    //         break;
    //       case firebase.storage.TaskState.RUNNING: // or 'running'
    //         console.log("Upload is running");
    //         break;
    //     }
    //   },
    //   (error) => {
    //     console.log("Upload unsuccessful");
    //   },
    //   () => {
    //     // Handle successful uploads on complete
    //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //       console.log("File available at", downloadURL);
    //       setGetref((getref) => [...getref, downloadURL]);
    //     });
    //   }
    // );

    //   uploadTask
    //     .then(() => {
    //       console.log("Image uploaded to bucket");
    //       for (var i = 0; i < allfile.length; i++) {
    //         var newgetref = storageRef.child(allfile[i].name).getDownloadURL();
    //         setGetref((getref) => [...getref, newgetref]);
    //       }
    //     })
    //     .catch((e) => console.log("uploading image error => ", e));
  };

  console.log("getreferece", getref);
  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      storeid: shopid,
      name: productname,
      price: productprice,
      percentageDiscount: percentagediscount,
      discountPrice: discountprice,
      colors: colors,
      size: size,
      about: aboutproduct,
      details: productdetails,
      images: getref,
    };
    console.log("Data payload", payload);
    axios({
      url: "http://localhost:8080/addproduct",
      method: "POST",
      data: payload,
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.root} noValidate>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
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
              onChange={(e) => setpercentagediscount(e.target.value)}
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
                value={colors}
                onChange={handleColors}
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
                {colornames.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStylesColors(name, colors, theme)}
                  >
                    <Checkbox checked={colors.indexOf(name) > -1} />
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
              value={aboutproduct}
              onChange={(e) => setAboutproduct(e.target.value)}
            />
            <InputLabel className={classes.label} id="demo-simple-select-label">
              Product Images
            </InputLabel>

            <Input
              required
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
              required
              className={classes.eminput}
              id="productprice"
              label="Product Price"
              variant="outlined"
              size="small"
              value={productprice}
              onChange={(e) => setproductprice(e.target.value)}
            />
            <InputLabel className={classes.eglabel}>For eg - 600</InputLabel>
            <TextField
              className={classes.eminput}
              id="discountprice"
              label="Discount Price"
              variant="outlined"
              size="small"
              value={discountprice}
              onChange={(e) => setdiscountprice(e.target.value)}
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
                value={size}
                onChange={handleSize}
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
                {sizenames.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStylesColors(name, size, theme)}
                  >
                    <Checkbox checked={colors.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              required
              id="outlined-multiline-static"
              label="Product Details"
              multiline
              rows={4}
              className={classes.eminput}
              defaultValue=""
              variant="outlined"
              value={productdetails}
              onChange={(e) => setProductdetails(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
