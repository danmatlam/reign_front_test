import React from 'react'
import styled from 'styled-components'
import IconSwitcher from '../IconSwitcher';
import Item from './Item';
const Pagination = ({
    nbPages
}) => {

// CALULATE GROUP OF PAGES
const TotalPagesArr = [];
const GorupedPagesArr = []
for (var i = 1; i <= nbPages; i++) TotalPagesArr.push(i);
while(TotalPagesArr.length)  GorupedPagesArr.push(TotalPagesArr.splice(0,9))
  return (
      <>
        {
            GorupedPagesArr.map(item=>(
                <View>
                    <Item value={<IconSwitcher name="chevronLeft"/>}></Item>
                    {item.map(subItem=>(<Item value={subItem}/>))}
                    <Item value={<IconSwitcher name="chevronRight"/>}></Item>
                </View>
            )
            )
        }
      </>
  )
}

export default Pagination;

const View = styled.div`
    display:flex;
    padding:.5em;
    gap:.5em;
    width:100%;
    justify-content:center;
`