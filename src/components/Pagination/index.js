import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import IconSwitcher from '../IconSwitcher';
import Item from './Item';
const Pagination = ({
    nbPages,
    page,
}) => {

    const navigate = useNavigate();

    // CALULATE GROUP OF PAGES
    const TotalPagesArr = [];
    const GorupedPagesArr = [];

    for (var i = 1; i <= nbPages; i++) TotalPagesArr.push(i);
    while (TotalPagesArr.length) GorupedPagesArr.push(TotalPagesArr.splice(0, 9));

    let pageGroupIndex= GorupedPagesArr.map(item=>{
        return item.find(item=>parseInt(item)===parseInt(page));
    });
    pageGroupIndex = pageGroupIndex.findIndex(item => item!==undefined);
    
    

    const moveUp =()=>{
        navigate(`/${GorupedPagesArr[pageGroupIndex+1][0]}`);
    }
    const moveDown =()=>{
        navigate(`/${GorupedPagesArr[pageGroupIndex-1][0]}`);
    }
    const moveTo =(page)=>{
        navigate(`/${page}`);
    }
  
  
    return (
        <View>
            <Item value={<IconSwitcher name="chevronLeft"/>} action={moveDown}/>
            {GorupedPagesArr[pageGroupIndex].map(subItem => (
                <Item value={subItem} 
                current={parseInt(page) === parseInt(subItem)}
                action={()=>moveTo(subItem)}
                />))}
            <Item value={<IconSwitcher name="chevronRight"/>} action={moveUp}/>
        </View>
    )
}

export default Pagination;

const View = styled.div`
    display:flex;
    gap:.5em;
    width:100%;
    justify-content:center;

`