import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Grid, Input } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import ShopDetailsInput from "../../Components/ShopDetails.Input";
import ShopOwnerInput from "../../Components/ShopOwner.Input";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 50,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Enter Bussiness Details",
    "Enter Owner Details",
    "Username & Password",
  ];
}

function ShopRegister(props) {
  const verifyStep = (value) => {
    // console.log("the value is ", value);
    setActiveStep(value);

    // console.log("active step", activeStep)
    // console.log("steps.length", steps.length)

    // {activeStep === steps.length - 1 ? ("Finish" ) : "Next"}
  };

  // useEffect(() => {
  //   props.getProducts();
  //   // props.formData("abc")
  // }, []);

  console.log("newprops", props);

  const dataArray = [];

  const getData = (formData) => {
    console.log("formData is", formData);
    dataArray.push(formData);
    console.log("dataArrayIs", dataArray);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Grid style={{ display: "flex", justifyContent: "center" }}>
            <ShopDetailsInput
              verifyStep={verifyStep}
              submit={props.formData}
              getData={getData}
            />
          </Grid>
        );
      case 1:
        return (
          <ShopOwnerInput
            verifyStep={verifyStep}
            submit={props.formData}
            getData={getData}
            submitFormData={props.submitFormData}
          />
        );
      case 2:
        return "This is the bit I really care about!";
      default:
        return "Unknown stepIndex";
    }
  }

  const classes = useStyles();
  

  const history = useHistory();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Navbar />
      <Box p={1} className={classes.formbox}>
        {/* <ShopDetailsInput />
          <ShopOwnerInput /> */}

        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Box>

      <Footer />
    </div>
  );
}

export default ShopRegister;
