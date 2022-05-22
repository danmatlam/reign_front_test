import React from 'react'
import { JSONTree } from 'react-json-tree'
import useSWR from 'swr'
import { postFetcher, postFilter } from '../../Dao/posts'
import Pagination from '../Pagination'
import PostCard from './PostCard'
import styled from 'styled-components';
const Posts = ({
    page
}) => {

    const postsUrl =  `https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=${page}`;
    let { data, error } = useSWR(postsUrl, postFetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    data = postFilter(data); 

    return (

            <View>
                {data.hits.map((post, key) => (
                <PostCard
                    story_title={post.story_title}
                    story_url={post.story_url}
                    author={post.author}
                    created_at={post.created_at}
                    faved={key % 2}
                />))}
                <JSONTree data={data} />


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