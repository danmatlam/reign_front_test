import React, { useState } from 'react';
import styled from 'styled-components';
import IconSwitcher from '../../IconSwitcher';



const FavHeart = ({
  faved
}) => {

  const [pulse,setPulse]= useState(false);

  const handleFavs=()=>{
    setPulse(true);
    setTimeout(() => {
      setPulse(false);
    }, 1000);
  }

  return (
    <View pulse={pulse} onClick={handleFavs}>
      {faved ? <IconSwitcher name="heart"/> : <IconSwitcher name="heartOutline" />} 
    </View>
  )
}

export default FavHeart;

const View = styled.div`
display:flex;
justify-content:center;
cursor:pointer;
svg {
    color: red;
    font-size:1.5em;
}
${props => props.pulse && `
    animation: pulse 1s linear infinite;

  @keyframes pulse {
      0%{
        transform: scale(1);
        opacity: 0;
      }
      50%{
        transform: scale(1.3);
        opacity:1;
      }
      100%{
        transform: scale(1);
        opacity:0;
      }
  }
`}

`