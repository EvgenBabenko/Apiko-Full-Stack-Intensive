import React, { Component } from 'react'

import PostListItem from './PostListItem'
import MoreButton from './MoreButton'
import Search from './Search'
import NoItems from './NoItems'
import Loading from './Loading'

const fetchData = entity => {
    const API = 'https://jsonplaceholder.typicode.com';

    return fetch(API + entity)
        .then(responce => responce.json())
        // .then(data => {console.log('data', data)})
}

class PostList extends Component {
    state = {
        data: [],
        isLoading: true,
        postsToShow: PostList.stepPost,
        filteredData: [],
        searchValue: '',
    }

    componentDidMount() {

        setTimeout(() => {
            fetchData('/posts')
                .then(data => {
                    this.setState({
                        data,
                        filteredData: data,
                        isLoading: false,
                    })
                })
            }, 1500
        )

        // setTimeout(fn, 1500);
    }

    // shouldComponentUpdate() {

    // }

    getMorePosts = () => {
        const { postsToShow, filteredData } = this.state;

        if (postsToShow >= filteredData.length) return;

        this.setState({
            postsToShow: postsToShow + PostList.stepPost,
        })
    }

    changeSearch = ({ target: { value } } ) => {
        const regExp = new RegExp(value, 'gi')
        let filteredData = this.state.data.filter(item => regExp.test(item.title))

        if (!filteredData) filteredData = this.state.data;

        this.setState({
            searchValue: value,
            filteredData,
        })
    }

    render() {
        const postElement = this.state.filteredData
            .slice(0, this.state.postsToShow)
            .map(post =>
                <PostListItem
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />
            );

        const counterPosts = postElement.length;
        console.log()

        return (
            <React.Fragment>
                <Search onChangeSearch={this.changeSearch} {...this.state} />
                <div className='post-list'>
                    <h2>Showed posts: ({counterPosts})</h2>
                    {this.state.isLoading ? <Loading /> : 
                        counterPosts === 0 ? <NoItems /> : postElement}
                </div>
                <MoreButton onClickButton={this.getMorePosts}/>
            </React.Fragment>
        )
    }
}

PostList.stepPost = 10;

export default PostList