import React from 'react'
import IconSwitcher from '../IconSwitcher'
import styled from 'styled-components';

const SelectOption = ({id,label,selected, handleSelect, setOpen}) => {
  const onChange = (id)=>{
    setOpen(false);
    handleSelect(id)
  }
  return (
    <View selected={selected} onClick={()=>onChange(id)}>
        <IconSwitcher name={id} />
        <span>{label}</span>
    </View>
  )
}

export default SelectOption;

const View = styled.div`
    display:flex;
    align-items:center;
    gap:.5em;
    padding: .45em 1em;
    cursor:pointer;
    transition: .3s ease;
    background:#ffffff;
    :hover{
        background:#ebeef2;
    }

    //font
    font-size: 14px;
    color: #343434;
    width: 100%;

`
