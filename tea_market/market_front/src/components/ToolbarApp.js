import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function ToolbarApp() {
  const classes = useStyles();
  let history = useHistory();
  
  function handleMainClick() {
    history.push("/home")};

  function handleLoginClick() {
      history.push("/login")};

  function handleRegisterClick() {
        history.push("/register")};    

  return (
    <div className={classes.grow}>
      <Toolbar>
        <div onClick={handleMainClick} style={{display:"flex", cursor:"pointer"}}>

        <Typography className={classes.title} variant="h6" noWrap>
        <IconButton>
          <EmojiFoodBeverageIcon style={{ color: "white" }} />
        </IconButton>
          Vic's Tea Market
        </Typography>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Button variant="contained" color="primary"onClick={handleLoginClick}>
            Log in
          </Button>
          <Button variant="contained" color="primary" onClick={handleRegisterClick}>
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </div>
  );
}
