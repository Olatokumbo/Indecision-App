import React from "react";
import {TextField, Button} from "@material-ui/core";
import style from "./Addoptions.module.css";
const Addoptions = ({add}) => {
    const option = (e)=>{
        e.preventDefault();
        let option = e.target.elements.option.value;
        if(option)
        add(option);
        e.target.elements.option.value = "";
    }
    return (
        <React.Fragment>
        <form onSubmit={option} autoComplete="off" className={style.form}>
        <TextField label="Task" variant="outlined" name="option" size="small" className={style.textField}/>
        <Button variant="contained" type="submit">ADD</Button>
        </form>
        </React.Fragment>
    );

}
export default Addoptions;