import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
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

      background: "#81d4fa",
    },
    background: "#80deea",
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
      background: "#81d4fa",
      width: 0,
    },
    width: drawerWidth,
    background: "#81d4fa",
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
}));

function Navbar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [category, setCategory] = React.useState({
    age: "",
    name: "hai",
  });

  let history = useHistory();

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
          Hello , Safiya
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
          </IconButton>
          <Typography className={classes.Logo} variant="h6" noWrap>
            MyShop
          </Typography>
          <div className={classes.navbar}>
            <FormControl className={classes.formControl}>
              <Link to="#" className={classes.navlinks}>
                Home
              </Link>

              <NativeSelect
                value="hello"
                onChange={handleChange}
                inputProps={{
                  name: "name",
                  id: "",
                }}
              >
                <option className={classes.cat} value="Categories">
                  Categories
                </option>
                <optgroup label="Author">
                  <option value="hai">Hai</option>
                </optgroup>
                <optgroup label="Contributors">
                  <option value="olivier">Olivier</option>
                  <option value="kevin">Kevin</option>
                </optgroup>
              </NativeSelect>

              <Link to="#" className={classes.navlinks}>
                Categories
              </Link>
              <Link to="#" className={classes.navlinks}>
                About
              </Link>
              <Link to="#" className={classes.navlinks}>
                Contact
              </Link>
            </FormControl>
          </div>
          <div className={classes.icondesign}></div>

          <div className={classes.loginbutton}>
            <Button variant="outlined" href="#outlined-buttons">
              Login
            </Button>
          </div>
          <div className={classes.signupbutton}>
            <Button
              onClick={redirect}
              variant="outlined"
              href="#outlined-buttons"
            >
              Signup
            </Button>
          </div>

          <div className="p-5">
            <IconButton
              color="default"
              style={{ flexGrow: 1 }}
              className={classes.icondesign}
              edge="end"
              size="medium"
            >
              <div className={classes.acounticon}>
                <AccountCircle />
                <Typography onClick={redirect} className={classes.cartnumber}>
                  Safiya
                </Typography>
              </div>
              <div className={classes.icondesign}>
                <ShoppingCartIcon />
                <Typography className={classes.cartnumber}>2</Typography>
              </div>
            </IconButton>
          </div>
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

export default Navbar;
