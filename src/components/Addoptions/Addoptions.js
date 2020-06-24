import React from "react";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import style from "./Addoptions.module.css";
const Addoptions = ({addToStore}) => {
    const option = (e) => {
        e.preventDefault();
        let option = e.target.elements.option.value;
        if (option)
        //Add data to redux store
        addToStore(option);
        e.target.elements.option.value = "";
    }
    return (
        <React.Fragment>
            <form onSubmit={option} autoComplete="off" className={style.form}>
                <TextField label="Task" variant="outlined" name="option" size="small" className={style.textField} />
                <Button variant="contained" type="submit">ADD</Button>
            </form>
        </React.Fragment>
    );

}

const mapDispatchToProps = (dispatch) => {
    return{
        addToStore: (value) => dispatch(actionCreator.add(value))
    }
}
export default connect(null, mapDispatchToProps)(Addoptions);