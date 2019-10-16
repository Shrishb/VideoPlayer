import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import fetchData from '../api/fetchData';

class App extends React.Component{
    
    state ={ videos:[]};

    onSearchSubmit = async (term) =>{
       const response = await fetchData.get('/search',{
            params:{
                q:term
            }
        });

        this.setState({videos: response.data.items});
    }
    
    render(){
        return (
        <div className="ui container"> 
            <SearchBar onSearchSubmit={this.onSearchSubmit}></SearchBar> 
            <VideoList videos={ this.state.videos }></VideoList> 

        </div>
        )
    }
}

export default App;