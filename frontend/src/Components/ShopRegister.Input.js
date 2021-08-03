import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "../Utils/useForm";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
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

const ShopOwnerInput = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [allFormData, setAllFormData] = useState([]);
  const [newArray, setNewArray] = useState([])
  
  

  const handleSubmit = () => {
    // console.log("userValue", userValue);
    // console.log("allFormDataaaa", allFormData)
    // setAllFormData(props.allProps.form_Data.data)
    // setNewArray(allFormData.push(userValue));
        // setNewArray([...allFormData, userValue])
        setAllFormData(prevState => [...prevState, userValue])

        console.log("handleSubmitchanges", allFormData)

    // props.verifyStep(2);
    // props.getData();
  };




  React.useEffect(()=>{
    // console.log("props", props.allProps.form_Data.data)
    // console.log("useffect form Data",allFormData )
    setAllFormData(props.allProps.form_Data.data)
  },[] )

  React.useEffect(() => {
    console.log("allformdata", allFormData);
    if(allFormData.length === 3){
    props.submitFormData(allFormData)
    history.push("/home")
      // alert("3")
    }
  }, [allFormData]);



  const validate = (values) => {
    let errors = {};
    if(!values.owner_email){
      errors.owner_email="Required"
    }
    if(!values.owner_password){
      errors.owner_password="Required"
    }
    if(!values.owner_confirmPassword){
      errors.owner_confirmPassword="Required"
    }
    // console.log("validations", values);
    // console.log("errors", typeof errors, Object.keys(userValueErrors).length);

    return errors;
  };
  const {
    values: userValue,
    errors: userValueErrors,
    handleChange: onLoginChange,
    handleSubmit: onLoginSubmit,
  } = useForm(handleSubmit, validate);

  // const [shopname, setshopname] = useState("");
  console.log("submitteddddddd",allFormData, allFormData.length )

  return (
    <div>
      <Box p={1}>
        <Paper className={classes.signup} elevation={0}>
          <Typography className={classes.create}>Register</Typography>
          <form className={classes.root}>
            <TextField
              className={classes.input}
              id="name"
              label="Shop Email"
              variant="outlined"
              size="small"
              // value={shopname}
              // onChange={(e) => setshopname(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "owner_email", value: e.target.value })
              }
            />
             {
              userValueErrors.owner_email ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.owner_email} </Typography> : null
            }
            <TextField
              className={classes.eminput}
              id="email"
              label="Password"
              variant="outlined"
              size="small"
              // value={shopemail}
              // onChange={(e) => setshopemail(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "owner_password", value: e.target.value })
              }
            />
             {
              userValueErrors.owner_password ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.owner_password} </Typography> : null
            }
            <TextField
              className={classes.eminput}
              id="contact"
              label="Confirm Password"
              variant="outlined"
              size="small"
              // value={shopcontact}
              // onChange={(e) => setshopcontact(e.target.value)}
              onChange={(e) =>
                onLoginChange({ name: "owner_confirmPassword", value: e.target.value })
              }
            />
             {
              userValueErrors.owner_confirmPassword ?  <Typography  className={classes.formControl} style={{fontSize:"12px", marginTop:"2px", color:"red"}} > {userValueErrors.owner_confirmPassword} </Typography> : null
            }
            <br />
            <br />
            <br />
          </form>
        </Paper>
        <div className={classes.buttonContainer} style={{display:"flex", flexDirection:"row"}}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={()=>props.verifyStep(1)}
            style={{marginRight:20}}

          >
            Back
          </Button>
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

export default ShopOwnerInput;
