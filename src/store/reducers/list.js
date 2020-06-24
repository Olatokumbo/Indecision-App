import * as actionTypes from "../actions/actionTypes";

const initialState = {
    list: [],
    choice: ""
};

const listReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_LIST:
            return{
                list: [...action.data]
            }
        case actionTypes.REMOVE:
            return{
                ...state,
                list: state.list.filter((data)=> data.id!==action.id)
            }
        case actionTypes.REMOVE_ALL:
            return{
                ...state,
                list: []
            }
        case actionTypes.CHOICE:
            return{
                ...state,
                choice: state.list[Math.floor(Math.random()*state.list.length)].value
            }
        default:
            {
                return state
            }
    }
};

export default listReducer;