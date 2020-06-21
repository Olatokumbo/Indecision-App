import React, {useState}from "react";
import {Button, Typography} from "@material-ui/core";
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
const Choice =({choose, options})=>{
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    return(
        <React.Fragment>
        <Button variant="contained" disabled={!options.length} className={style.button} onClick={openModal}>What to Do?</Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Choice Modal"
        >
        <Typography variant="h6" gutterBottom>Computer has decided on...</Typography>
        <Typography variant="h5" gutterBottom>{options[choose()]}</Typography>

        <Button onClick={closeModal} variant="contained" color="secondary">close</Button>
        </Modal>
        </React.Fragment>
    )
}
export default Choice;