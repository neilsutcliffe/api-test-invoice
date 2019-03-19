
import House from './House'
import request from 'superagent';
import React, {Component} from 'react';
import config from './config'

const loadAllHouses = () => request.get(config.endpoint)
    .set('Accept', 'application/json')
    .then((res) => JSON.parse(res.text))
		.then((json) => { return { success: true, data: json }})
		.catch((err) => { return { success: false, data: err.message }})


const mapHouses = (data) => Object.keys(data).map((key) => (
	<House key={key} house={data[key]} />
  ));  

class HouseList extends Component {
	componentDidMount() {
	  loadAllHouses().then((data) => {
			this.setState(data);
	  });
	}
  
	render() {
		if (this.state == null) return <div>Loading...</div>;
		
		if (!this.state.success) return <div className="alert alert-danger" role="alert">Error: { this.state.data }</div>
  
	  return (
		<div className="container">
		  <h1>List of Houses</h1>
		  <hr />
		  { mapHouses(this.state.data) }
		</div>
	  );
	}
  }
  
  export default HouseList;
  