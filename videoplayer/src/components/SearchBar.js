import React from 'react';


class SearchBar extends React.Component{

    state= {term:''};

    searchInputChange = (event) =>  {
        this.setState({term: event.target.value});
    };

    onSearch = (event) =>  {
       event.preventDefault();
    };

    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>search</label>
                        <input type="text"
                        onSubmit={this.onSearch}
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