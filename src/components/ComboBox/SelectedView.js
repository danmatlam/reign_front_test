import React from 'react'
import IconSwitcher from '../IconSwitcher'
import styled from 'styled-components';

const SelectedView = ({ id, label, selected }, props) => {
  return (
    <View selected={selected}>
      <div className="text_view">
        <IconSwitcher name={id} />
        <span>{label}</span>
      </div>

      <IconSwitcher name="chevronDown" />


    </View>
  )
}

export default SelectedView;

const View = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:.5em;
    padding: .45em 1em;
    cursor:pointer;
    transition: .3s ease;
    /* background:red; */

    .text_view{
      display:flex;
      gap:.5em;
      align-items:center;
    }
    :hover{
        background:#ebeef2;
    }

    //font
    font-size: 14px;
    color: #343434;

`
