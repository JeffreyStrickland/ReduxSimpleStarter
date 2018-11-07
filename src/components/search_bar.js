import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };//this will be the only place that state is set this way
    }
    //classes must have render
    render() {
        //render must return JSX
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}//controlled component has its value set by the state
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
            
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;