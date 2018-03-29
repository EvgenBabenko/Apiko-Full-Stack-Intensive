import React, { Component } from 'react';

import data from '../data.json'

import PostList from './PostList'
import MoreButton from './MoreButton'
import Search from './Search'

class App extends Component {
   state = {
        counterPosts: 10,
        filteredData: data,
        searchValue: '',
   }

    getMorePosts = () => {
        const { counterPosts, filteredData } = this.state;

        if (counterPosts >= filteredData.length) return;

        this.setState({
            counterPosts: counterPosts + 10,
        })
    }

    changeSearch = ({ target: { value } } ) => {
        console.log(value);
        const regExp = new RegExp(value, 'gi')
        let filteredData = data.filter(item => regExp.test(item.title))

        if (!filteredData) filteredData = data;

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