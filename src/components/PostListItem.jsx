import React, { PureComponent } from 'react'

export default class PostListItem extends PureComponent {
    render() {
        const { id, title, body, index } = this.props;

        return(
            <div id={id} className='post-item'>
                <h3>{index}. {title}</h3>
                <p>{body}</p>
            </div>
        )
    }
}