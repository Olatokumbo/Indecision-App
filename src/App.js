import React from "react";
import Appbar from "./components/Appbar/Appbar";
import Addoptions from "./components/Addoptions/Addoptions";
import Optionlist from "./components/Optionlist/Optionlist";
import Choice from "./components/Choice/Choice";
import { Card, CardContent, Grid } from "@material-ui/core";
import style from "./App.module.css";
const App = () => {
    return (
        <React.Fragment>
            <Appbar />
            <Grid container justify="center" direction="column" alignItems="center" className={style.container}>
                <Grid item className={style.choose}><Choice/></Grid>
                <Grid item component={Card} className={style.card}>
                    <CardContent className={style.cardContent}>
                        <Optionlist />
                        <Addoptions />
                    </CardContent>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default App;

