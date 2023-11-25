import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedUser } from '../../../../core/reducers/sliderSlice';
import CgiPlaceHolder from '../../../../core/statics/petitUser.png';

import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.scss';
const handleDragStart = (e) => e.preventDefault();

const responsive = {
  100: {
    items: 4,
    itemsFit: 'fill'
  }
};

function Slider(props) {
  const userList = useSelector((state) => state.slider.userList);
  const [selectedKey, setSelectedKey] = useState(-1);

  const selectedUser = useSelector((state) => state.slider.selectedUser);
  const dispatch = useDispatch();
  var user = JSON.parse(sessionStorage.getItem('user'));

  const onClickUser = (id) => {
    dispatch(setSelectedUser(id));
    props.flipCard(false);
  };

  const questionMark = (key, id) => {
    return (
      <div
        onClick={() => {
          setSelectedKey(key);
          onClickUser(id);
        }}
        className={'question-mark-container ' + (key == selectedKey ? 'selectedKey' : '')}
      >
        <img draggable="false" onClick={(a) => onClickUser(id)} src={CgiPlaceHolder} className="placeholderpic" />
      </div>
    );
  };

  return (
    <AliceCarousel
      fadeOutAnimation={true}
      infinite={true}
      disableButtonsControls={true}
      responsive={responsive}
      mouseTracking
    >
      {userList
        .filter((u) => u.id != user.id)
        .map((user, index) => {
          return user.discovered ? (
            <img
              draggable="false"
              key={user.id}
              onClick={(a) => onClickUser(user.id)}
              className="avatar-container"
              src={
                user.picture === '' || user.picture === null
                  ? 'https://ui-avatars.com/api/?name=' + user.completeName
                  : user.picture
              }
            />
          ) : (
            questionMark(index, user.id)
          );
        })}
    </AliceCarousel>
  );
}

export default Slider;
