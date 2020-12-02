import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
    AppBar,
    Badge,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import Logo from "../../assets/commerce.png";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        <img
                            src={Logo}
                            alt="E-Commerce"
                            height="25px"
                            className={classes.image}
                        />
                        E-Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                        <div className={classes.button}>
                            <IconButton
                                aria-label="Show cart items"
                                color="inherit"
                                component={Link}
                                to="/cart"
                            >
                                <Badge
                                    badgeContent={totalItems}
                                    color="secondary"
                                >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
