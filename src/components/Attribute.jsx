import React from 'react';

export default ({label, text}) => {
	if (text === "") return null;
	return (
	  <>
		<dt className="col-sm-3">
		{ label }
		</dt>
		<dd className="col-sm-9">
		  { text }
		</dd>
	  </>
	);
  }