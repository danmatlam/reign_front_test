import React from 'react'
import styled from 'styled-components'
const AppBar = () => {
  return (
    <View>
        <img src="/logo.png" alt="hacker news logo"/>
    </View>
  )
}

export default AppBar;

const View = styled.div`
    box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
    background-color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    img{
        height: 32px;
    }
`