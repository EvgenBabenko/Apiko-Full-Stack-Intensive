import React from 'react'

import PostListItem from './PostListItem'

export default function PostList({ posts, counterPosts }) {
    const postElement = posts.map(post =>
        <PostListItem
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
        />
    )

    return (
        <div className='post-list'>
            <h2>Loaded posts: ({counterPosts})</h2>
            {postElement}
        </div>
    )
        
}