import { FormControl } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
import useForm from "../Utils/useForm";

// import Typography from "@material-ui/core/Typography";
// import Typography from "@material-ui/core/Typography";

import React, { useState } from "react";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formbox: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 90,
      marginLeft: 120,
      display: "flex",
      flexDirection: "row",
    },
    marginTop: 90,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
  },
  root: {
    overflow: "hidden",
  },
  signup: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 50,
      width: 450,
    },
    marginTop: 0,
    width: 350,
  },
  create: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 600,
      fontSize: 20,
      padding: 10,
      marginLeft: 150,
    },
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    fontSize: 22,
    padding: 20,
    marginLeft: 10,
  },
  input: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 20,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 20,
  },

  buttonContainer:{
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 20,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 20,
  },
  eminput: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 15,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 15,
  },
  signupbtn: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 70,
      marginTop: 20,
      width: 155,
    },
    marginLeft: 10,
    marginTop: 10,
    width: 155,
  },
  loginbtn: {
    [theme.breakpoints.up("sm")]: {
      marginTop: 20,
      marginLeft: 10,
      width: 155,
    },
    marginTop: 20,
    marginLeft: 10,
    width: 155,
  },
  formControl: {
    [theme.breakpoints.up("sm")]: {
      width: 320,
      marginLeft: 70,
      marginTop: 20,
    },
    width: 320,
    marginLeft: 10,
    marginTop: 20,
  },
}));

const ShopDetailsInput = (props) => {
  const classes = useStyles();
  const [shoptype, setshoptype] = useState("");

  const handleSubmit = () => {
    props.verifyStep(1);
    props.submit(userValue);
  };
  // console.log("Child props", props)

  const handletype = (event) => {
    setshoptype(event.target.value);
  };


  const validate = (values) => {
    let errors = {};
    console.log("a", values)
    console.log("b", userValueErrors)

    if(!values.shop_name){
      errors.shop_name="Required"
    }
    if(!values.shop_contact){
      errors.shop_contact="Required"
    }
    if(!values.shop_address){
      errors.shop_address="Required"
    }
    if(!values.shop_insta_id){
      errors.shop_insta_id="Required"
    }
    if(!values.shop_facebook_id){
      errors.shop_facebook_id="Required"
    }
    if(!values.shop_Type){
      errors.shop_Type="Required"
    }
    if(!values.shop_details){
      errors.shop_details="Required"
    }
    if(!values.shop_tagLine){
      errors.shop_tagLine="Required"
    }

    console.log(errors,"xxxx")

    //console.log("validations", values);
    // console.log("errors", typeof errors, Object.keys(userValueErrors).length);

    return errors;
  };
  const {
    values: userValue,
    errors: userValueErrors,
    handleChange: onLoginChange,
    handleSubmit: onLoginSubmit,
  } = useForm(handleSubmit, validate);

  return (
    <div>
      <Box p={1}>
        <Paper className={classes.signup} elevation={0}>
          <Typography className={classes.create}>Shop Details</Typography>
          <div className={classes.root}>
            <TextField
              className={classes.input}
              id="name"
              label="Shop Name"
              variant="outlined"
              size="small"
              // value={shopname}
              // onChange={(e) => setshopname(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_name", value: e.target.value })
              }
            />
            {
              userValueErrors.shop_contact ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.shop_contact} </Typography> : null
            }
            <TextField
              className={classes.eminput}
              id="contact"
              label="Shop Contact"
              variant="outlined"
              size="small"
              // value={shopcontact}
              // onChange={(e) => setshopcontact(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_contact", value: e.target.value })
              }
            />
             {
              userValueErrors.shop_name ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.shop_name} </Typography> : null
            }
            <TextField
              className={classes.eminput}
              id="address"
              label="Shop Address"
              variant="outlined"
              size="small"
              // value={shopaddress}
              // onChange={(e) => setshopaddress(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_address", value: e.target.value })
              }
            />
             {
              userValueErrors.shop_address ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.shop_address} </Typography> : null
            }
            <TextField
              className={classes.eminput}
              id="instagram"
              label="Business Instagram Id"
              variant="outlined"
              size="small"
              // value={shopinstagram}
              // onChange={(e) => setshopinstagram(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_insta_id", value: e.target.value })
              }
            />
             {
              userValueErrors.shop_insta_id ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.shop_insta_id} </Typography> : null
            }
            <TextField
              className={classes.eminput}
              id="facebook"
              label="Business Facebook"
              variant="outlined"
              size="small"
              // value={shopfacebook}
              // onChange={(e) => setshopfacebook(e.target.value)}
              onChange={(e) =>
                onLoginChange({
                  name: "shop_facebook_id",
                  value: e.target.value,
                })
              }
            />
             {
              userValueErrors.shop_facebook_id ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.shop_facebook_id} </Typography> : null
            }

            <br />
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-name-label">Shop Type</InputLabel>
              <Select
                fullWidth
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value={shoptype}
                onChange={handletype}
                // input={<Input />}
                // style={{backgroundColor:"red"}}
              >
                <MenuItem value={"Automotive"}>Automotive</MenuItem>
                <MenuItem value={"Baby & Toddler"}>Baby & Toddler</MenuItem>
                <MenuItem value={"Clothing & Shoes"}>Clothing & Shoes</MenuItem>
                <MenuItem value={"Entertainment & Art"}>
                  Entertainment & Art
                </MenuItem>
                <MenuItem value={"Electronics"}>Electronics</MenuItem>
                <MenuItem value={"Food"}>Food</MenuItem>
                <MenuItem value={"Gifts"}>Gifts</MenuItem>
                <MenuItem value={"Health"}>Health</MenuItem>
                <MenuItem value={"Beauty"}>Beauty</MenuItem>
                <MenuItem value={"Home & Graden"}>Home & Graden</MenuItem>
                <MenuItem value={"Office & Professional Services"}>
                  Office & Professional Services
                </MenuItem>
                <MenuItem value={"Personal & Home Services"}>
                  Personal & Home Services
                </MenuItem>
                <MenuItem value={"Restaurants & Dining"}>
                  Restaurants & Dining
                </MenuItem>
                <MenuItem value={"Sports & Outdoors"}>
                  Sports & Outdoors
                </MenuItem>
                <MenuItem value={"Travel"}>Travel</MenuItem>
              </Select>
            </FormControl> */}

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Shop Type</InputLabel>
              <Select
                native
                // value={state.age}
                onChange={(e) =>
                  onLoginChange({ name: "shop_Type", value: e.target.value })
                }                
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Automotive"}>Automotive</option>
                <option value={"Baby & Toddler"}>Baby & Toddler</option>
                <option value={"Clothing & Shoes"}>Clothing & Shoes</option>
                <option value={"Entertainment & Art"}>Entertainment & Art</option>
                <option value={"Electronics"}>Electronics</option>
                <option value={"Food"}>Food</option>
                <option value={"Gifts"}>Gifts</option>
                <option value={"Health"}>Health</option>
                <option value={"Beauty"}>Beauty</option>
                <option value={"Home & Graden"}>Home & Graden</option>
                <option value={"Office & Professional Services"}>
                  Office & Professional Services
                </option>
                <option value={"Personal & Home Services"}>
                  Personal & Home Services
                </option>
                <option value={"Restaurants & Dining"}>
                  Restaurants & Dining
                </option>
                <option value={"Sports & Outdoors"}>
                  Sports & Outdoors
                </option>
                <option value={"Travel"}>Travel</option>
                <option value={"Others"}>Others</option>

              </Select>
            </FormControl>
            {
              userValueErrors.shop_Type ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.shop_Type} </Typography> : null
            }

            <TextField
              id="outlined-multiline-static"
              label="About Shop"
              multiline
              rows={4}
              className={classes.eminput}
              variant="outlined"
              onChange={(e) =>
                onLoginChange({ name: "shop_details", value: e.target.value })
              }
            />
             {
              userValueErrors.shop_details ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.shop_details} </Typography> : null
            }

            <br />
            <TextField
              className={classes.eminput}
              id="contact"
              label="Business Tag Line"
              variant="outlined"
              size="small"
              // value={shopcontact}
              // onChange={(e) => setshopcontact(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "shop_tagLine", value: e.target.value })
              }
            />
             {
              userValueErrors.shop_tagLine ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.shop_tagLine} </Typography> : null
            }

            <br />
            <br />
            <InputLabel
              className={classes.eminput}
              id="demo-simple-select-label"
            >
              Business logo
            </InputLabel>

            <Input type="file" className={classes.eminput} />
            <br />
          </div>
        </Paper>
        <div className={classes.buttonContainer} style={{display:"flex", flexDirection:"row"}}>
          {/* <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={()=>props.verifyStep(0)}
            style={{marginRight:20}}

          >
            Back
          </Button> */}
          <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onLoginSubmit();
          }}
          className={classes.button}
        >
          Next
        </Button>
        </div>
      </Box>
    </div>
  );
};

export default ShopDetailsInput;
