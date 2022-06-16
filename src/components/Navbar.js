import React from 'react';
import firebaseUtil from '../utils/firebaseUtil'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, useHistory } from 'react-router-dom';
import cw from "../assets/cw.jpeg";
import { useAuth } from '../context/AuthContextProvider';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    fontFamily: 'Girassol',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& span': {
      fontSize: 30,
      color: 'wheat',
    },
  },
    appBar: {
      backgroundColor: '#046582',
    },
    logo: {
      width: 40,
  },
    linkStyle: {
      textDecoration: "none",
      color: "black",
    },
    login: {
      padding: 10,
      fontSize:20,
      color: "white",
      textDecoration: "none",
    },
    typo: {
      textDecoration: "none",
      color: 'wheat',
    },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  }

  const handleDashboard = () => {
    setAnchorEl(null);
    history.push("/");
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={handleDashboard}>
            <img src={cw} alt="cw" className={classes.logo} />
          </IconButton>
          <div className={classes.grow} />
          <Link to="/" className={classes.typo}>
            <Typography className={classes.title} variant="h6" noWrap>
              ──── <span>{"<pehlivan/>"}</span> Blog ────
            </Typography>
            </Link>
          <div className={classes.grow} />
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{ fontSize: '40px' }}/>
              </IconButton>
              {currentUser?.email ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              <Link to="/profile" className={classes.linkStyle}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <Link to="/new-blog" className={classes.linkStyle}>
                <MenuItem onClick={handleClose}>New Blog</MenuItem>
              </Link>
              <Link to="/dashboard" className={classes.linkStyle}>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Link>
              </Menu>
              ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              <Link to="/login" className={classes.linkStyle}>
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
              <Link to="/register" className={classes.linkStyle}>
                <MenuItem onClick={handleClose}>Register</MenuItem>
              </Link>
              </Menu>
              )}
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
