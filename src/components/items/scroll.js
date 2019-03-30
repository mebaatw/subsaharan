import React from 'react';

const Scroll = (props)=>{
	return(
		<div style={{overflowY: 'scroll', border:'3px  #bbb', height:'400px', width:'90%'}}>
			{props.children}
		</div>
	);
}

export default Scroll;