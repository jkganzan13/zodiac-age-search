import React, {Component} from 'react';
import {
  InstantSearch,
  SearchBox,
} from 'react-instantsearch/dom';
import './App.css';
import SearchResults from './results/SearchResults';

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="DL19JXFUCV"
        apiKey="1f15a473c0ccb51d02bd98ea15595500"
        indexName="ffxii_za_items"
      >
        <SearchBox/>
        <SearchResults/>
      </InstantSearch>
    );
  }
}

export default App;
