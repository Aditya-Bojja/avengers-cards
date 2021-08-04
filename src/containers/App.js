import React, { Component } from 'react';
import CardList from '../components/CardList';
import { avengers } from './avengers';
import SearchBox from '../components/SearchBox';
import './App.css';
import title from './icons/title.png';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {

    constructor(){
        super()
        this.state = {
            avengers : avengers,
            searchField : '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }

    render() {
        const {avengers, searchField} = this.state;
        const filteredAvengers = avengers.filter(avenger => {
            return (
                avenger.role.toLowerCase().includes(searchField.toLowerCase()) ||
                avenger.name.toLowerCase().includes(searchField.toLowerCase())
            );
        })

        if(avengers.length === 0){
            return <h1>Loading...</h1>
        } else {
            return(
                <div className = "tc">
                    <img className = "title" src = {title} alt = "title" /> 
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList avengers = {filteredAvengers}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;