import React, { useEffect } from "react";
import styles from "./Optionlist.module.css";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions";
import { Typography, Button, List, ListItem } from "@material-ui/core";
const Optionlist = ({ list, removeAll, fetchData, remove }) => {
    useEffect(() => {
        fetchData();
    }, [fetchData])
    return (
        <React.Fragment>
            <Button variant="contained" color="secondary" onClick={removeAll} size="large" disabled={!list.length}>Remove All</Button>
            <div className={styles.lists}>
                {(list.length === 0) ? <Typography color="textSecondary" variant="h6">No Items on the List</Typography> :
                    (list.map((data) => <List key={data.id}>
                        <ListItem divider className={styles.listItem}>
                        <Typography color="textSecondary" variant="h6">{data.value}</Typography>
                        <Button variant="contained" color="secondary" onClick={()=>remove(data.id)}>DELETE</Button>
                        </ListItem>
                    </List>
                    ))
                }
            </div>
        </React.Fragment>
    )
};
const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        remove: (id) => dispatch(actionCreator.remove(id)),
        removeAll: () => dispatch(actionCreator.removeAll()),
        fetchData: () => dispatch(actionCreator.fetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Optionlist);