import React from 'react'

export default function PostListItem(props) {
    const { id, title, body } = props;

    return (
        <div id={id}>
            <h2>{title}</h2>
            <div>{body}</div>
        </div>
    )
}