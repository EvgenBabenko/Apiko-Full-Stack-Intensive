import React, { Component } from 'react';

import data from '../data.json'

import PostList from './PostList'
import MoreButton from './MoreButton'

export default class App extends Component {
   state = {
       countPost: 1,
       dataPart: data.slice(0, 1)
   }

    handleClickButton = () => {
        this.setState({
            countPost: this.state.countPost + 1,
            dataPart: data.slice(0, this.state.countPost)
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <PostList posts={this.state.dataPart}/>
                <MoreButton onClickButton={this.handleClickButton}/>
            </div>
        )
    }
}