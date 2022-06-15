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
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { currentUser } = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <img src={cw} alt="cw" className={classes.logo} />
          </IconButton>
          <div className={classes.grow} />

            <Typography className={classes.title} variant="h6" noWrap>
              ──── <span>{"<pehlivan/>"}</span> Blog ────
            </Typography>

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
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
