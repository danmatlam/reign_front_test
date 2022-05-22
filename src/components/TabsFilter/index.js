import React from 'react'
import styled from 'styled-components'
import TabOption from './TabOption'

const TabsFilter = ({
    tabsFilters,
    setTabsFilter
}) => {


    const handleSelect = (value) => {
        debugger;
        const auxOptions = tabsFilters.map(option => ({ ...option, selected: false }));
        const auxIndex = auxOptions.findIndex(option => option.id === value);
        auxOptions[auxIndex].selected = true;
        setTabsFilter(auxOptions);
    };
    return (
        <View>
            {tabsFilters.map(({ id, title, selected }, index) =>
                <TabOption
                    key={id}
                    id={id}
                    title={title}
                    selected={selected}
                    index={index}
                    handleSelect={handleSelect}
                />)}
        </View>
    )
}

export default TabsFilter;

const View = styled.div`
    display:flex;
`