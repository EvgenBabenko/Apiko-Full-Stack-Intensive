import React from 'react'

import PostListItem from './PostListItem'

export default class PostList extends React.Component {
    render() {
        console.log(this.props)

        const postElement = this.props.posts.map(post =>
            <PostListItem
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
            />
        )

        return (
            <div>
                {postElement}
            </div>
        )
        
    }
}