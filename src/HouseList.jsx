
import House from './House'
import request from 'superagent';
import React, {Component} from 'react';


const loadAllHouses = () => request.get('https://www.anapioficeandfire.com/api/houses')
    .set('Accept', 'application/json')
    .then((res) => JSON.parse(res.text))
    .then((json) => json);


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
  
	  return (
		<div className="container">
		  <h1>List of Houses</h1>
		  <hr />
		  { mapHouses(this.state) }
		</div>
	  );
	}
  }
  
  export default HouseList;
  