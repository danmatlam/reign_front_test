import React from 'react'
import styled from 'styled-components'
const Item = ({value}) => {
  return (
    <View>{value}</View>
  )
}

export default Item;

const View = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:1.8em;
    width:1.8em;
    border-radius:6pt ;
    border: 1pt solid #979797;
    font-size: 14px;

`