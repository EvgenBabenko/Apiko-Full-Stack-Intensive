import React from 'react'

export default ({ id, title, body }) => 
    <div id={id} className='post-item'>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>