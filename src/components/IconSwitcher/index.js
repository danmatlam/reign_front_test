import React from 'react'
import styled from 'styled-components'
import {ReactComponent as ReactIcon} from './icons/react.svg'
import {ReactComponent as AngularIcon} from './icons/angular.svg'
import {ReactComponent as VueIcon} from './icons/vue.svg'
import {ReactComponent as ClockIcon} from './icons/clock.svg'
import {ReactComponent as ChevronDown} from './icons/chevron_down.svg'
import {ReactComponent as ChevronUp} from './icons/chevron_up.svg'
import {ReactComponent as ChevronRight} from './icons/chevron_right.svg'
import {ReactComponent as ChevronLeft} from './icons/chevron_left.svg'
export const iconKeys = {
    "react": <ReactIcon/>,
    "angular": <AngularIcon/>,
    "vue": <VueIcon/>,
    "clock":<ClockIcon/>,
    "chevronDown":<ChevronDown/>,
    "chevronUp":<ChevronUp/>,
    "chevronRight":<ChevronRight/>,
    "chevronLeft":<ChevronLeft/>,



}
const IconSwitcher = ({ name }) => (
    <IconWrap >
        {iconKeys[name]}
    </IconWrap>
)

export default IconSwitcher

const IconWrap = styled.div`
    display:flex;
    justify-content:center;
    svg{
        height:24px;
        width:24px;
    }
`;