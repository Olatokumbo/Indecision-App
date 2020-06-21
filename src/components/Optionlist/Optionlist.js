import React from "react";
import styles from "./Optionlist.module.css";
import {Typography, Button, List, ListItem} from "@material-ui/core";
const Optionlist = ({options, remove}) =>{
    let id = 0
    return(
        <React.Fragment>
        <Button variant="contained" color="secondary" onClick={remove} size="large" disabled={!options.length}>Remove All</Button>
        <div className={styles.lists}>
       {(options.length===0)?<Typography color="textSecondary" variant="h6">No Items on the List</Typography>:
        (options.map((data)=><List key={id++}>
            <ListItem divider><Typography color="textSecondary" variant="h6">{data}</Typography></ListItem>
            </List>
            ))
        }
        </div>
        </React.Fragment>
    )
};

export default Optionlist;