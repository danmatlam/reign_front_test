import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { timeSince } from '../../../utils';
import IconSwitcher from '../../IconSwitcher';
import FavHeart from './FavHeart';
const PostCard = ({
    key,
    story_title,
    story_url,
    author,
    created_at,
    isFaved,
    handleFav
}) => {

    const time_since = timeSince(created_at);

    return (
        <View >
            <a className="card_body" to={story_url} target="_blank" rel="noreferrer noopener">
                <div className="card_header">
                    <IconSwitcher name="clock" />
                    <span>{time_since} ago by {author}</span>
                </div>
                <div className="card_content">

                    <span>{story_title}</span>
                </div>
            </a>
            <div className="card_icon">
                <FavHeart
                    isFaved={isFaved}
                    onClick={handleFav}
                />
            </div>
        </View>
    );
}

export default PostCard;

const View = styled.div`
    width: 100%;
    display:flex;
    border-radius:9pt ;
    overflow:hidden;
    border:2pt solid #979797;
    background:#ebeef2;
    height: 6em;

    transition: all 0.3s cubic-bezier(.25,.8,.25,1);   
    cursor:pointer;
    :hover {
        .card_body{
            opacity:.6;   
        }
    }  
    .card_body{
       
        text-decoration: none; 
        color:#6b6b6b;
        display:flex;
        flex-direction:column;
        gap: 0.3em;
        padding:1em;
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
          
        }
        flex:12;
    }
    .card_icon{
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        pointer-events: auto;
        flex:3;
    }
  
  
`