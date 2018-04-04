import React, { Component } from 'react'

import PostListItem from './PostListItem'
import MoreButton from './MoreButton'
import Search from './Search'
import NoItems from './NoItems'
import Loading from './Loading'

const fetchData = async (entity) => {
    const responce =  await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
    const data = await responce.json();

    return data
}

class PostList extends Component {
    state = {
        data: [],
        isLoading: true,
        postsToShow: PostList.stepPost,
        searchValue: '',
    }

    componentDidMount() {
        const getData = async () => {
            const data = await fetchData('posts');

            this.setState({
                data,
                isLoading: false,
            })
        }

        getData();
        this.timerID = setInterval(getData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getMorePosts = (counterPosts) => {
        const { postsToShow, data } = this.state;

        if (postsToShow > counterPosts || postsToShow >= data.length) return;

        this.setState({
            postsToShow: postsToShow + PostList.stepPost,
        })
    }

    changeSearch = ({ target: { value: searchValue } } ) => {
        this.setState({ searchValue })
    }

    getFilteredData = () => {
        const { searchValue, postsToShow, data } = this.state;
        const regExp = new RegExp(searchValue, 'gi')
        const filteredData = data
            .filter(({ title }) => regExp.test(title))
            .slice(0, postsToShow)
            .map((post, index) =>
                <PostListItem
                    key={post.id}
                    index={index + 1}
                    {...post}
                />
            );

        return filteredData;
    }

    render() {
        const { isLoading } = this.state;
        const postElement = this.getFilteredData();
        const counterPosts = postElement.length;

        return (
            <React.Fragment>
                <Search onChangeSearch={this.changeSearch} {...this.state} />
                <div className='post-list'>
                    <h2>Showed posts: ({counterPosts})</h2>
                    {isLoading ? <Loading /> : 
                        counterPosts ? postElement : <NoItems />}
                </div>
                {isLoading ? null : <MoreButton onClickButton={this.getMorePosts.bind(null, counterPosts)}/>}
            </React.Fragment>
        )
    }
}

PostList.stepPost = 10;

export default PostList