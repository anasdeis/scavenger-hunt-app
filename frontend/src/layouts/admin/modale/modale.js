import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { frFR } from '@mui/x-date-pickers/locales';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Modal } from 'antd';

import { RequestGetGameplay, RequestUpdateGameplay } from '../../../core/actions/gameContext.action';

import './modale.scss';

export const format = 'YYYY-MM-DDTHH:mm:ss';
function Modale(props) {
  var play = useSelector((state) => state.gameControl.play);
  var endGame = useSelector((state) => state.gameControl.partyEnded);
  // var dateEnd = useSelector((state) => state.gameControl.dateEnd)

  const [date, setDate] = useState(null);
  const [error, setError] = useState(null);
  const errorMessage = useMemo(() => {
    if (error == 'disablePast') {
      return 'Veuillez choisir une date dans le futur.';
    } else if (error != null && error != '') {
      return 'La date est invalide.';
    } else {
      return '';
    }
  }, [error]);
  const dispatch = useDispatch();
  const startParty = () => {
    dispatch(RequestUpdateGameplay(true, false, date));
    props.setOpen(false);
  };

  const updateDateParty = () => {
    dispatch(RequestUpdateGameplay(play, endGame, date));
    props.setOpen(false);
  };

  useEffect(() => {
    dispatch(RequestGetGameplay());
    setInterval(() => {
      dispatch(RequestGetGameplay());
    }, 5000);
  }, []);

  return (
    <Modal
      open={props.open}
      footer={[
        <Button key="back" onClick={() => props.setOpen(false)}>
          Retour
        </Button>,
        <Button
          disabled={!!errorMessage}
          key="submit"
          type="primary"
          onClick={() => {
            if (!play) {
              startParty();
            } else {
              updateDateParty();
            }
          }}
        >
          {!play ? 'Démarrer' : 'Modifier'}
        </Button>
      ]}
      onCancel={() => props.setOpen(false)}
      centered={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ textAlign: 'center', padding: '30px' }}>
          <div style={{ marginBottom: '20px', color: 'black' }}>
            <div>
              <div>
                {!play
                  ? "Vous êtes sur le point de démarrer le jeu, veuillez fixer une heure d'arrêt automatique de la partie."
                  : 'Vous êtes sur le point de modifier la date de fin de la partie'}
              </div>
              <br />
              <LocalizationProvider
                localeText={frFR.components.MuiLocalizationProvider.defaultProps.localeText}
                dateAdapter={AdapterDayjs}
              >
                <DateTimePicker
                  onChange={(NewDate) => {
                    setDate(NewDate);
                  }}
                  value={date}
                  disablePast
                  // format={"YYYY-MM-DD HH:mm"}
                  views={['year', 'month', 'day', 'hours', 'minutes']}
                  onError={(newError) => setError(newError)}
                  slotProps={{
                    textField: {
                      helperText: errorMessage
                    }
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Modale;
