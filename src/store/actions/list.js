import * as actionTypes from "./actionTypes";
import { database } from "../../firebase/firebase";
export const fetchData = () => {
    return dispatch => {
        database.ref("notes").on("value", (snapshot)=>{
            const array = [];
                snapshot.forEach((childSnapShot) => {
                    array.push({ id: childSnapShot.key, ...childSnapShot.val()});
                })
                dispatch(fetching(array));
                console.log(array);
        })
    }
}

export const fetching = (data) =>{
    return{
        type: actionTypes.FETCH_LIST,
        data
    }
}
export const add = (value) => {
    return () => {
        database.ref("notes").push({
            value
        }).then((snap) =>{
            // dispatch(adding(snap.key, value))
        })
    }
};

export const remove = (id) => {
   return dispatch =>{
    database.ref(`notes/${id}`)
    .remove().then(() => {
               dispatch(removingItem);
            }).catch((err) => {
                console.log(err);
            });
   }
};

export const removingItem = (id) =>{
    return {
        type: actionTypes.REMOVE,
        id
    }
} 

export const removeAll = () =>{
    return dispatch =>{
        database.ref("notes").remove()
        .then(()=>{
            dispatch(removing());
        })
    }
}
export const removing = () => {
    console.log("REMOVING")
    return {
        type: actionTypes.REMOVE_ALL
    }
};
export const choice = () => {
    return {
        type: actionTypes.CHOICE
    }
};

