import React from 'react'

export default function PostListItem({ id, title, body }) {
    return (
        <div id={id} className='post-item'>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}