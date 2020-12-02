import React from "react";

import {
    AppBar,
    Badge,
    IconButton,
    // Menu,
    // MenuItem,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

import Logo from "../../assets/commerce.png";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        color="inherit"
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
                    <div className={classes.button}>
                        <IconButton
                            aria-label="Show cart items"
                            color="inherit"
                        >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
