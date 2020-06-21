import React, { useState } from "react";
import Appbar from "./components/Appbar/Appbar";
import Addoptions from "./components/Addoptions/Addoptions";
import Optionlist from "./components/Optionlist/Optionlist";
import Choice from "./components/Choice/Choice";
import { Card, CardContent, Grid } from "@material-ui/core";
import style from "./App.module.css";
const App = () => {
    const [options, setOptions] = useState([]);
    const add = (newOption) => {
        setOptions(
            options.concat(newOption)
        )
    };
    const removeAll = () => {
        setOptions(
            []
        )
    };
    const choose = () =>{
        return Math.floor(Math.random()*options.length);
    }
    return (
        <React.Fragment>
            <Appbar />
            <Grid container justify="center" direction="column" alignItems="center" className={style.container}>
                <Grid item className={style.choose}><Choice choose={choose} options={options}/></Grid>
                <Grid item component={Card} className={style.card}>
                    <CardContent className={style.cardContent}>
                        <Optionlist options={options} remove={removeAll} />
                        <Addoptions add={add} />
                    </CardContent>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default App;

