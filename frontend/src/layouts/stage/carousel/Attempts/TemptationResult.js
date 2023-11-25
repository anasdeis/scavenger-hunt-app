import React from 'react';
import { Modal } from '@mui/material';

function TemptationResult(props) {
  return (
    <Modal
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      open={props.open}
      centered={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {props.component}
    </Modal>
  );
}

export default TemptationResult;
