import React from 'react'
import styled from 'styled-components'
import IconSwitcher from '../IconSwitcher';
import FavHeart from './FavHeart';
const CourseCard = ({
    date,
    description,
    faved
}) => {
    return (
        <View>
            <div className="card_body">
                <div className="card_header">
                    <IconSwitcher name="clock" />
                    <span>{date}</span>
                </div>
                <div className="card_content">
                    <span>{description}</span>
                </div>
            </div>
            <div className="card_icon">
                <FavHeart faved={faved} />
            </div>
        </View>
    );
}

export default CourseCard;

const View = styled.div`
    display:flex;
    border-radius:9pt ;
    overflow:hidden;
    border:2pt solid #979797;
    background:#ebeef2;


    .card_body{
        color:#6b6b6b;
        display:flex;
        flex-direction:column;
        gap: 0.3em;
        padding:1em;
        flex:21; 
        background:white;
        .card_header{
            display:flex; 
            align-items:center;
            gap: 0.6em;
            font-weight: 400;

        }
        .card_content{
            font-weight: 500;
        }
    }
    .card_icon{
        display:flex;
        justify-content:center;
        align-items:center;
        flex:1.5;
    }
  
  
`