import React from 'react';
import QRCode from 'react-qr-code';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@mui/material';

import { toggleModal } from '../../../core/reducers/sliderSlice';

function QrDisplay(props) {
  const openQrModal = useSelector((state) => state.slider.openQrModal);
  const dispatch = useDispatch();
  var user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <Modal
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      open={openQrModal}
      onClose={() => dispatch(toggleModal(!openQrModal))}
      centered={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <QRCode
          // value={btoa(user.email)}
          value={user.email}
          bgColor={'white'}
          // fgColor={'var(--redCgi)'}
          fgColor={'black'}
        />
      </div>
    </Modal>
  );
}
export default QrDisplay;
