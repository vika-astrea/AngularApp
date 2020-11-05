import AppBar from "@material-ui/core/AppBar";
import Collapse from "@material-ui/core/Collapse";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import TocIcon from "@material-ui/icons/Toc";
import React from "react";
import ToolbarApp from "./ToolbarApp";
import CancelIcon from "@material-ui/icons/Cancel";
import { Route, Switch, useHistory } from "react-router-dom";
import LogInContainer from "../containers/LogInContainer";
import RegisterContainer from "../containers/RegisterContainer";
import MainContainer from "../containers/MainContainer";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openPrice, setOpenPrice] = React.useState(false);
  const [func, setFunction] = React.useState();
  const [type, setType] = React.useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  let history = useHistory();

  function handleLinkClick() {
    history.push("/login");
  }

  const handleClickPrice = () => {
    setOpenPrice(!openPrice);
  };

  const handleRemove = () => {
    setFunction();
    setType("");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <ToolbarApp />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItemText primary={"Account"} />

            <ListItem button onClick={handleLinkClick}>
              <ListItemIcon>
                <AccountCircleIcon color="disabled" />
              </ListItemIcon>
              <ListItemText primary={" Log in "} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItemText primary={"Filters"} />
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <TocIcon />
              </ListItemIcon>
              <ListItemText primary={"Type "} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Tea", "Cup", "Pot", "Set", "Misc"].map((text) => (
                  <ListItem
                    button
                    key={text}
                    className={classes.nested}
                    onClick={(e) => setType(text)}
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <ListItem button onClick={handleClickPrice}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={"Price"} />
              {openPrice ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openPrice} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={(e) => setFunction(true)}
                >
                  <ListItemText primary={"Ascending"} />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={(e) => setFunction(false)}
                >
                  <ListItemText primary={"Descending"} />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleRemove}>
              <ListItemIcon>
                <CancelIcon />
              </ListItemIcon>
              <ListItemText primary={" Remove all filters "} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route path="/home">
            <MainContainer type={type} func={func} />
          </Route>
          <Route path="/login">
            <LogInContainer />
          </Route>
          <Route path="/register">
            <RegisterContainer />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
