import React from 'react'

import PostListItem from './PostListItem'
import NoItems from './NoItems'

export default function PostList({ posts }) {
    const counterPosts = posts.length;
    const postElement = posts.map(post =>
        <PostListItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
        />
    );

    console.log(posts)

    return (
        <div className='post-list'>
            <h2>Loaded posts: ({counterPosts})</h2>
            {counterPosts === 0 ? <NoItems /> : postElement}
        </div>
    )
        
}