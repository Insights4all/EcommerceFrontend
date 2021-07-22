import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 0,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "0%",

      background: "#2196f3",
    },
    background: "#2196f3",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
      color: "black",
    },
    color: "black",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    [theme.breakpoints.up("sm")]: {
      background: "#2196f3",
      width: 0,
    },
    width: drawerWidth,
    background: "#2196f3",
  },
  content: {
    padding: theme.spacing(0),
    width: "100%",
  },
  textstyle: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    padding: 5,

    marginLeft: 5,
    marginRight: 5,
  },
  headings: {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Segoe UI Emoji",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 600,
      padding: 5,
      fontSize: 30,
      marginLeft: 30,
      color: "#f50057",
    },
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 600,
    padding: 5,
    fontSize: 27,
    marginLeft: 15,
    color: "#f50057",
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
    marginLeft: 50,
    marginTop: 5,
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
      fontSize: 16,
      color: "black",
      marginLeft: 15,
      marginTop: 5,
      marginRight: 15,
    },
    fontSize: 0,
  },
  formControl: {
    [theme.breakpoints.up("sm")]: {
      width: 70,
      marginLeft: 8,
      marginRight: 5,
      display: "inline",
      marginTop: 15,
      padding: "5px",
    },
    minWidth: 0,
    marginLeft: 0,
    marginRight: 0,
    display: "none",
  },
  selectEmpty: {
    marginTop: "1px",
  },
  icondesign: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flex: 1,
      width: "10px",
      marginLeft: 20,
      padding: 5,
      marginRight: 100,
      alignSelf: "flex-end",
    },

    display: "flex",
    flex: 1,
    width: "10px",
    marginLeft: 5,
    padding: 2,
    marginRight: 30,
    alignSelf: "flex-end",
  },
  acounticon: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flex: 1,
      width: "10px",
      marginLeft: 20,
      padding: 5,
      marginRight: 100,
      alignSelf: "flex-end",
    },
    display: "none",
  },
  signupbutton: {
    [theme.breakpoints.up("sm")]: {
      marginRight: 130,
      display: "inline",
    },
    display: "none",
  },
  loginbutton: {
    [theme.breakpoints.up("sm")]: {
      marginRight: 30,
      display: "inline",
    },
    display: "none",
  },
  shopname: {
    fontFamily: "Segoe UI Emoji",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 500,
    padding: 1,
    fontSize: 17,
    color: "white",
    marginLeft: 10,
    marginTop: 2,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: 10,
  },
}));

function Storenavbar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [category, setCategory] = React.useState({
    age: "",
    name: "hai",
  });

  const history = useHistory();
  useEffect(() => {
    console.log("Navbar props", props.data);
  }, [props]);

  const handleChange = (event) => {
    const name = event.target.name;
    setCategory({
      ...category,
      [name]: event.target.value,
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const redirect = () => {
    history.push("/profile");
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography className={classes.username} variant="h6" noWrap>
          Hello "safiya"
        </Typography>
      </div>

      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />{" "}
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />{" "}
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
            <Avatar
              alt="Remy Sharp"
              src="https://www.giftcart.com/pub/media/giftcart/manifest/icons/default/giftcart-pwa.png"
              className={classes.small}
            />

            <Typography className={classes.shopname}>
              Customised Gift Cart
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Storenavbar;
