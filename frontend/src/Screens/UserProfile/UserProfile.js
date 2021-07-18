import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop: 80,
      marginLeft: 380,
      marginRight: 380,
    },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  probox: {
    [theme.breakpoints.up("sm")]: {
      width: 700,
      padding: 21,
    },
    marginLeft: "0px",
  },
  table: {
    maxWidth: 450,
  },
  tablecontainer: {
    marginTop: 20,
  },
  form: {
    [theme.breakpoints.up("sm")]: {
      width: 350,
      marginTop: 5,
      padding: 10,
    },
    marginLeft: "0px",
  },
  formControl: {
    [theme.breakpoints.up("sm")]: {
      minWidth: 120,
      maxWidth: 300,
    },
    minWidth: 120,
    maxWidth: 300,
  },
  inputlabel: {
    marginTop: 25,
  },
  update: {
    marginTop: 20,
  },
  ordersbox: {
    [theme.breakpoints.up("sm")]: {
      width: "430px",
    },
    marginLeft: "0px",
    marginTop: "0px",
  },
  paperbox: {
    height: "90px",
  },
  proimage: {
    width: "100px",
    height: "80px",
    marginLeft: "5px",
    marginRight: "10px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  protext: {
    marginTop: "5px",
    fontSize: 16,
    marginLeft: "10px",
  },
  process: {
    color: "green",

    marginLeft: "10px",
  },
}));
function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Full Name", 159),
  createData("Mobile Number", 237),
  createData("Email Id", 262),
  createData("Gender", 305),
  createData("Location", 356),
  createData("Address", 356),
];

function UserProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [gender, setGender] = React.useState("");
  console.log("In profile.js", localStorage.getItem("isLoggedin"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <AppBar position="static" color="inherit" elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Edit profile" {...a11yProps(1)} />
            <Tab label="Orders" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Box className={classes.probox}>
            <Typography>Profile Details</Typography>
            <TableContainer
              component={Paper}
              elevation={0}
              className={classes.tablecontainer}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        size="small"
                        variant="head"
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <form noValidate autoComplete="off" className={classes.form}>
            <InputLabel htmlFor="my-input">Full Name</InputLabel>
            <Input
              placeholder=""
              inputProps={{ "aria-label": "description" }}
              variant="outlined"
              fullWidth="true"
            />
            <InputLabel className={classes.inputlabel} htmlFor="my-input">
              Mobile Number
            </InputLabel>
            <Input
              placeholder=""
              inputProps={{ "aria-label": "description" }}
              variant="outlined"
              fullWidth="true"
            />
            <InputLabel className={classes.inputlabel} htmlFor="my-input">
              Email Id
            </InputLabel>
            <Input
              placeholder=""
              inputProps={{ "aria-label": "description" }}
              variant="outlined"
              fullWidth="true"
            />
            <InputLabel className={classes.inputlabel} htmlFor="my-input">
              Gender
            </InputLabel>
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value={gender}
                onChange={handleGender}
                input={<Input />}
              >
                <MenuItem value={"XLL"}>Male</MenuItem>
                <MenuItem value={"L"}>Female</MenuItem>
              </Select>
            </FormControl>
            <InputLabel className={classes.inputlabel} htmlFor="my-input">
              Location
            </InputLabel>
            <Input
              placeholder=""
              inputProps={{ "aria-label": "description" }}
              variant="outlined"
              fullWidth="true"
            />
            <InputLabel className={classes.inputlabel} htmlFor="my-input">
              Address
            </InputLabel>
            <Input
              placeholder=""
              inputProps={{ "aria-label": "description" }}
              variant="outlined"
              fullWidth="true"
            />
            <Button
              className={classes.update}
              variant="contained"
              color="primary"
            >
              Update
            </Button>
          </form>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box
            display="flex"
            flexDirection="column"
            p={1}
            m={1}
            bgcolor="background.paper"
            className={classes.ordersbox}
          >
            <Box p={1}>
              <Paper className={classes.paperbox}>
                <Box display="flex" flexDirection="row">
                  <Box>
                    <img
                      alt="proimage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpb_Kdq-q5ymJ8Uk4izotbcFGTZCo6EG85Q&usqp=CAU"
                      className={classes.proimage}
                    />
                  </Box>
                  <Box>
                    <Typography className={classes.protext}>
                      IPHONE 11 PRO
                    </Typography>
                    <Typography className={classes.protext}>₹599</Typography>
                    <Typography className={classes.process}>
                      Arriving
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box p={1}>
              <Paper className={classes.paperbox}>
                <Box display="flex" flexDirection="row">
                  <Box>
                    <img
                      alt="proimage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpb_Kdq-q5ymJ8Uk4izotbcFGTZCo6EG85Q&usqp=CAU"
                      className={classes.proimage}
                    />
                  </Box>
                  <Box>
                    <Typography className={classes.protext}>
                      IPHONE 11 PRO
                    </Typography>
                    <Typography className={classes.protext}>₹599</Typography>
                    <Typography className={classes.process}>
                      Delivered
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </TabPanel>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
