import React from "react";
import styles from "./Optionlist.module.css";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import {Typography, Button, List, ListItem} from "@material-ui/core";
const Optionlist = ({list, removeAll}) =>{
    return(
        <React.Fragment>
        <Button variant="contained" color="secondary" onClick={removeAll} size="large" disabled={!list.length}>Remove All</Button>
        <div className={styles.lists}>
       {(list.length===0)?<Typography color="textSecondary" variant="h6">No Items on the List</Typography>:
        (list.map((data)=><List key={data.id}>
            <ListItem divider><Typography color="textSecondary" variant="h6">{data.value}</Typography></ListItem>
            </List>
            ))
        }
        </div>
        </React.Fragment>
    )
};
const mapStateToProps = (state) =>{
    return{
        list: state.list
    }
}

const mapDispatchToprops = (dispatch) =>{
    return{
        removeAll: () => dispatch(actionCreator.removeAll())
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Optionlist);