import React from 'react';

const SearchBox =({ searchChange})=> {
	return(
		<div>
			<input 
				className='form-control '
				type='search' 
				placeholder='search for a country'
				onChange={searchChange}
				/>
		</div>
	);
}

export default SearchBox;