import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from '../../theme/constants';
import IconSwitcher from '../IconSwitcher';
import SelectedView from './SelectedView';
import SelectOption from './SelectOption';

const Select = ({ options, handleSelect }) => {
    const [open, setOpen] = useState(-10);

    const selected = options.find(option => option.selected);

    const toggleOpen = () => {
        open === -10 ? setOpen(3) : setOpen(-10);
    }
    return (
        <View open={open}>
            <div onClick={toggleOpen}>
                {selected ?
                    <SelectedView
                        id={selected.id}
                        label={selected.label}
                        selected={selected.selected}
                    /> :
                    <div className="input_label" >
                        <span>
                            Select your news
                        </span>
                        <IconSwitcher name="chevronDown" />
                    </div>

                }
            </div>

            <div className="input_options" >
                {options.map(item => (
                    <SelectOption
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        selected={item.selected}
                        handleSelect={handleSelect}
                        setOpen={setOpen}
                    />))}
            </div>
        </View>
    )
}

export default Select;


const View = styled.div`
    width: 18em;
    margin-bottom: 3em;
    position:relative;

    @media screen and  (min-width: ${0}px) and (max-width: ${media.xs}px) { 
        width:100%;
    }
    @media screen and  (min-width: ${media.xs}px) and (max-width: ${media.sm}px) { 
       width:100%;
    }
    @media screen and  (min-width: ${media.sm}px) and (max-width: ${media.md}px) { 
        width: 18em;
    }
    @media screen and  (min-width: ${media.md}px) and (max-width: ${media.lg}px) { 
        width: 18em;
    }
    @media screen and  (min-width: ${media.lg}px) { 
        width: 18em;
    }
    .selected_view{
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

        font-size: 14px;
        color: #343434;
        width: 100%;
    }

  .input_label{
    display: flex;
    align-items: center;
    gap:1em;
    border: 1px solid #000000;
    border-radius: 3pt;
    overflow:hidden;
    justify-content: space-between;
    padding: 0.3em;
  }
   
  .input_options{
    transition: .3s ease;


    will-change: transform;
    transition: .3s ease;
    transform: translateY(${props => props.open && props.open + '%'});
    display:${props => props.open === -10 ? 'none' : 'block'};

    background-color: #fff;
    box-shadow: 0 2px 2px 0 #dad8d8;
    overflow:hidden;
    position:absolute;
    width: 18em;
    top:2.4em;
    z-index:3;
  }
  
`;

