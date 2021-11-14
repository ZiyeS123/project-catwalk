import React from 'react';
import styled from 'styled-components';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e) {
    this.props.handleSearchBarInput(e.target.value)
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
      <div>
        <SearchText>
        <h3>Search for a Question</h3>
        </SearchText>
        <Search>
        <input placeholder="Have a Question? Search for Answers"value={this.state.term} onChange={this.handleChange}/>
        </Search>
      </div>
    )
  }
}

const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  height: 40px;
`;

const SearchText = styled.div`
  display: flex;
  justify-content: center;
  font-family: Helvetica, sans-serif;
`;

export default SearchBar;