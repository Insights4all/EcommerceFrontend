import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { blue } from "@material-ui/core/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  navigationtabs: {
    width: 300,
    display: "flex",
  },
  icon: {
    padding: 10,
  },
  Logo: {
    color: "black",
    marginTop: 2,
    padding: 2,
  },
  username: {
    padding: 25,
  },
  navbar: {
    padding: 10,
    marginLeft: 0,

    width: "100%",
    height: 30,
    backgroundColor: "blue",
  },
  cartnumber: {
    marginLeft: 10,
    fontWeight: 600,
  },
  navlinks: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      padding: 1,
      fontSize: 18,
      color: "white",
      marginLeft: 985,
      display: "flex",
      flex: 1,
      alignSelf: "flex-end",
    },
    fontSize: 0,
  },
}));

function Admin() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.navbar}>
        <Box display="flex" flexDirection="row">
          <Box>
            <Typography>Customised Gift Cart</Typography>
          </Box>
          <Box>
            <Link to="#" className={classes.navlinks}>
              Home
            </Link>
          </Box>
        </Box>
      </div>
      <div className={classes.navigationtabs}>
        <Tabs
          orientation="vertical"
          variant=""
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Products" {...a11yProps(1)} />
          <Tab label="ORDERS" {...a11yProps(2)} />
          <Tab label="PROFILE" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </div>
    </div>
  );
}

export default Admin;
