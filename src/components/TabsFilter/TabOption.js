import React from 'react'
import styled from 'styled-components'
const TabOption = ({
    id,
    title,
    selected,
    index,
    handleSelect
}) => {
    
    return (
        <View selected={selected} onClick={()=>{handleSelect(id)}}>
            <div className={!(index % 2) ? 'left' : 'right'}>
                <span>{title}</span>
            </div>
        </View>
    )
}

export default TabOption;

const View = styled.div`
    cursor:pointer;
    width:100pt;
    span{
        font-size: 16px;
        font-weight: 500;
        display:flex;
        justify-content:center;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    .left{
        border: 2pt solid ${props=> props.selected ? "#1797ff":"#979797"};
        padding: .3em 1.2em;
        border-radius:3pt 0 0 3pt;
        color:${props=> props.selected ? "#1797ff":"#6b6b6b"};
    }
    .right{
        border: 2pt solid ${props=> props.selected ? "#1797ff":"#979797"};
        padding: .3em 1.2em;
        border-radius:0 3pt 3pt 0;
        color:${props=> props.selected ? "#1797ff":"#6b6b6b"};

    }

`