import React from 'react';


class SearchBar extends React.Component{

    state= {term:''};

    searchInputChange = (event) =>  {
        this.setState({term: event.target.value});
    };

    onSearch = (event) =>  {
       event.preventDefault();

       this.props.onSearchSubmit(this.state.term);
    };

    render(){
        return(
            <div className="search-bar ui segment">   
                <form onSubmit={this.onSearch}  className="ui form">
                    <div className="field">
                        <label>search</label>
                        <input type="text"
                        value= {this.state.term}
                        onChange={this.searchInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;