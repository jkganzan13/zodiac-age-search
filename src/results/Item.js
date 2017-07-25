import React from 'react';
import PropTypes from 'prop-types';

const getData = (value) => {
	if(Array.isArray(value)) {
		return value.length ? value.join() : 'N/A';
	}
	return value;
};

const Data = ({ value }) => <span>{getData(value)}</span>;

const Item = ({ hit }) => (
	<div>
		<Data value={hit.name} />
		<Data value={hit.price} />
		<Data value={hit.drop} />
		<Data value={hit.monograph_drop} />
		<Data value={hit.steal} />
		<Data value={hit.poach} />
		<Data value={hit.reward} />
	</div>
);

Item.propTypes = {
	hit: PropTypes.shape({
		name: PropTypes.string,
		price: PropTypes.string,
		drop: PropTypes.array,
		monograph_drop: PropTypes.array,
		steal: PropTypes.array,
		poach: PropTypes.array,
		reward: PropTypes.array,
	}).isRequired,
};

export default Item
    