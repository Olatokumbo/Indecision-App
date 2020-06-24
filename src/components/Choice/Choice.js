import React, {useState}from "react";
import {Button, Typography} from "@material-ui/core";
import * as actionCreator from "../../store/actions";
import {connect} from "react-redux";
import style from "./Choice.module.css";
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const Choice =({choose, choice, list})=>{
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
      choose();
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    return(
        <React.Fragment>
        <Button variant="contained" disabled={!list.length} className={style.button} onClick={openModal}>What to Do?</Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Choice Modal"
        >
        <Typography variant="h6" gutterBottom>Computer has decided on...</Typography>
        <Typography variant="h5" gutterBottom>{choice}</Typography>

        <Button onClick={closeModal} variant="contained" color="secondary">close</Button>
        </Modal>
        </React.Fragment>
    )
}

const mapStateToProps = (state) =>{
  return{
    choice: state.choice,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
      choose: () => dispatch(actionCreator.choice())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Choice);