import React, { Component } from 'react';

import data from '../data.json'

import PostList from './PostList'
import MoreButton from './MoreButton'
import Search from './Search'

class App extends Component {
   state = {
        counterPosts: 10,
        // filteredData: data.slice(0, 10),
        filteredData: data,

        // dataPart: state.filteredData.slice(0, 10),
        searchValue: '',
   }

    getMorePosts = () => {
        // const { counterPosts } = this.state;

        // if (counterPosts >= data.length) return;

        // const counterPosts = this.state.counterPosts + 10;

        this.setState({
            counterPosts: this.state.counterPosts + 10,
            // dataPart: this.state.counterPosts + 10
         })
    }

    changeSearch = ({ target: { value } } ) => {
        console.log(value);
        const regExp = new RegExp(value, 'gi')
        let filteredData = data.filter(item => regExp.test(item.title))
        // const len = filteredData.length;

        if (!filteredData) {
            filteredData = data;
        }

        console.log(regExp);
        // const length = filteredData.length

        // if (filteredData.length < this.state.counterPosts) {
        //     this.setState({
        //         counterPosts: filteredData.length
        //     })
        // }

        console.log(filteredData)

        this.setState({
            searchValue: value,
            filteredData,
            // counterPosts: filteredData.length
         })
    }

    render() {
        console.log(this.state.counterPosts, this.state.filteredData)
        const { filteredData, counterPosts } = this.state;

        return (
            <React.Fragment>
                <Search onChangeSearch={this.changeSearch} {...this.state} />
                <PostList posts={filteredData.slice(0, counterPosts)} />
                <MoreButton onClickButton={this.getMorePosts}/>
            </React.Fragment>
        )
    }
}               

export default App;