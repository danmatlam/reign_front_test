import React from 'react'
import styled from 'styled-components'
const Item = ({value, current , action}) => {
  return (
    <View 
    onClick={action && action}
    href={ !action && `/${value}`} rel="noreferrer noopener"
    current={current}>{value}</View>
  )
}

export default Item;

const View = styled.a`
    text-decoration:none ;
    display:flex;
    justify-content:center;
    align-items:center;
    height:1.8em;
    width:1.8em;
    border-radius:6pt ;
    border: 1pt solid ${props=> props.current ? "#1797ff":"#ebeef2"};

    font-size: 12px;
    background: ${props=> props.current ? "#1797ff":"#FFFFFF"};
    color: ${props=> props.current ? "#FFFFFF":"#000000"};

  font-weight:400;
`