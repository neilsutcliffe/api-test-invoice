import React from 'react';

export default ({ label, items }) => {
	if (items.length == 0 || items[0] == "") return null;
  
	const mapped = items.map((item) => <li key={items.indexOf(item)}>{item}</li>)
	return (<>
	  <h3>{label}</h3>
	  <ul>{mapped}</ul>
	</>)
  }