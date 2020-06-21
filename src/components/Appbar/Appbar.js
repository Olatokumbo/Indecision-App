import React from "react";
import style from "./AppBar.module.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Appbar = () => {
    return (
        <React.Fragment>
            <AppBar position="static" className={style.container}>
                <Toolbar variant="dense">
                    <div className={style.brand}>
                    <Typography variant="h4" color="inherit">
                            Indecision
                    </Typography>
                    <Typography color="secondary" className={style.motto}>
                            Put your life in the hands of a computer
                    </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );

};

export default Appbar;