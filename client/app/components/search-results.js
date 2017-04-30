import React from 'react';
import SearchList from './search-list';
import Right_Bar from './right-bar';
import Nav_Bar from './nav-bar';

export default class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <Right_Bar user={1}/>
        <Nav_Bar/>
        <SearchList/>
      </div>
    )
  }
}
