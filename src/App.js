import React, { Component } from 'react';
import 'react-instantsearch-theme-algolia/style.css';
import {InstantSearch, Hits, SearchBox, Highlight, HitsPerPage,
RefinementList, Pagination, CurrentRefinements, ClearAll} from 'react-instantsearch/dom';

function Product({hit}) {
  return (
    <div style={{marginTop: '20px'}}>
      <span className="hit-name">
        <Highlight attributeName="name" hit={hit} />
      </span>
    </div>
  );
};

function Search() {
  return (
    <div>
      <CurrentRefinements/>
      <ClearAll/>
      <SearchBox />
      <RefinementList attributeName="category" />
      <Hits hitComponent={Product} />
      <Pagination />
    </div>

  );
}

class App extends Component {

  render() {
    return (
      <InstantSearch
        appId="latency"
        apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
        indexName="bestbuy"
      >
      {/* Search widgets will go there */}
      <HitsPerPage
        defaultRefinement={20}
        items={[{value: '30', label: 'Show 20 hits'}, {value: '50', label: 'Show 50 hits'}]}
      />
      <Search/>
      </InstantSearch>

    );
  }
}

export default App;
