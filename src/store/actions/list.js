import * as actionTypes from "./actionTypes";

export const add = (id, value) =>{
    return{
        type: actionTypes.ADD,
        value,
        id
    }
};

export const remove = (id) =>{
    return{
        type: actionTypes.REMOVE,
        id
    }
};

export const removeAll = () =>{
    return{
        type: actionTypes.REMOVE_ALL
    }
};
export const choice = () =>{
    return{
        type: actionTypes.CHOICE
    }
};

