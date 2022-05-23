import React from 'react'
import useSWR from 'swr'
import { postFetcher, postFilter } from '../../Dao/posts'
import Pagination from '../Pagination'

// <-- this is the line that makes the difference       
import PostCard from './PostCard'
import styled from 'styled-components';
import { media } from '../../theme/constants'
import { JSONTree } from 'react-json-tree'
const Posts = ({
    page,
    tecstack,
    setSettings,
    favedPosts,
    setFavedPosts
}) => {


    const postsUrl = `https://hn.algolia.com/api/v1/search_by_date?query=${tecstack}&page=${page}`;
    let { data, error } = useSWR(postsUrl, postFetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    data = postFilter(data);

    const handleFav = (favId) => {
        debugger;
        const found = favedPosts.find(fav => fav === favId);
        const payload = found ?
            favedPosts.filter(fav => fav !== favId) : [...favedPosts, favId];
        setFavedPosts(payload);
        setSettings('favedPosts', payload);
    }


    return (
        <div>
            <View>
                {data.hits.map((post, key) => (
                    <PostCard
                        key={post.objectID}
                        story_title={post.story_title}
                        story_url={post.story_url}
                        author={post.author}
                        created_at={post.created_at}
                        handleFav={() => handleFav(post.objectID)}
                        isFaved={favedPosts.includes(post.objectID)}
                    />))}
            </View>

            <Pagination nbPages={data.nbPages} page={page} />
            <JSONTree data={data}/>
        </div>

    )
}

export default Posts;


const View = styled.div`
    width:100%; 
    gap:1.8em 2.4em;
    margin-bottom: 2em;
    display: grid;
    @media screen and  (min-width: ${0}px) and (max-width: ${media.xs}px) { 
        grid-template-columns: repeat(1, 1fr);
    }
    @media screen and  (min-width: ${media.xs}px) and (max-width: ${media.sm}px) { 
        grid-template-columns: repeat(1, 1fr);
    }
    @media screen and  (min-width: ${media.sm}px) and (max-width: ${media.md}px) { 
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and  (min-width: ${media.md}px) and (max-width: ${media.lg}px) { 
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and  (min-width: ${media.lg}px) { 
        grid-template-columns: repeat(3, 1fr);
    }
`
