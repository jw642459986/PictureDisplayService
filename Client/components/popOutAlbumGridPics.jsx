import React from 'react';
import styled from 'styled-components';

const AlbumConstraints = styled.div`
  position: relative;
  width: 132px;
  height: 85px;
  object-fit: contain;
  overflow: hidden;
  margin: 5px;
  flex-shrink: 0;

`;

const AlbumText = styled.div`
  position: absolute;
  color: white;
  z-index: 2, width: 132px;
  height: 85px;
  text-shadow: 2px 2px 5px black;
`;

const AlbumImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PopOutAlbumPics = (props) => {
  return (

    <div style={{postion: 'relative', width: '132px', height: '85px', objectFit: 'contain', overflow: 'hidden', margin: '5px', flexShrink: 0}} onClick={() => {props.changeContent('tag', props.details)}}>
      <AlbumText>{props.details}</AlbumText>
      <img src={props.photo} />
    </div>

  )
}

export default PopOutAlbumPics;