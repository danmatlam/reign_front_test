import React from 'react'
import styled from 'styled-components'
import { timeSince } from '../../../utils';
import IconSwitcher from '../../IconSwitcher';
import FavHeart from './FavHeart';
const PostCard = ({
    story_title,
    story_url,
    author, 
    created_at,
    faved
}) => {

    const time_since = timeSince(created_at);
    return (
        <View>
            <div className="card_body">
                <div className="card_header">
                    <IconSwitcher name="clock" />
                    <span>{time_since} ago by {author}</span>
                </div>
                <div className="card_content">
                    <span>{story_title}</span>
                </div>
            </div>
            <div className="card_icon">
                <FavHeart faved={faved} />
            </div>
        </View>
    );
}

export default PostCard;

const View = styled.div`
    flex:1;
    min-width:40%;

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
            display: block;/* or inline-block */
            text-overflow: ellipsis;
            word-wrap: break-word;
            overflow: hidden;
            max-height: 2.4em;
            line-height: 1.2em;
        }
    }
    .card_icon{
        display:flex;
        justify-content:center;
        align-items:center;
        width:4.2em;
    }
  
  
`