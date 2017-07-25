import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { Hits, } from 'react-instantsearch/dom';

const SearchResults = (props) => <Hits hitComponent={Item} />;

SearchResults.propTypes = {};

export default SearchResults
    