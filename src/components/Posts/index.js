import React from 'react'
import { JSONTree } from 'react-json-tree'
import useSWR from 'swr'
import { getSettings, postFetcher, postFilter } from '../../Dao/posts'
import Pagination from '../Pagination'

// <-- this is the line that makes the difference       
import PostCard from './PostCard'
import styled from 'styled-components';
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

    )
}

export default Posts;


const View = styled.div`
  display: flex;
  gap:1.8em 2.4em;
  width:100%;
  flex-flow: wrap;
`