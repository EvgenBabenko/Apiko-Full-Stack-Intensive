import React, { Component } from 'react';

import data from '../data.json'

import PostList from './PostList'
import MoreButton from './MoreButton'

class App extends Component {
   state = {
        counterPosts: 10,
   }

    getMorePosts = () => {
        const { counterPosts } = this.state;

        if (counterPosts >= data.length) return;

        this.setState({
            counterPosts: counterPosts + 10,
         })
    }

    render() {
        return (
            <React.Fragment>
                <PostList 
                    posts={data.slice(0, this.state.counterPosts)}
                    {...this.state}
                />
                <MoreButton onClickButton={this.getMorePosts}/>
            </React.Fragment>
        )
    }
}               

export default App;