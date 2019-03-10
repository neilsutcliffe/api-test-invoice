import React, {Component} from 'react';
import request from 'superagent';

const loadAction = () => request.get('https://www.anapioficeandfire.com/api/houses')
    .set('Accept', 'application/json')
    .then((res) => JSON.parse(res.text))
    .then((json) => json);

const HouseDetail = ({label, text}) => {
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

const HouseDetailList = ({ label, items }) => {
  if (items.length == 0 || items[0] == "") return null;

  const mapped = items.map((item) => <li key={items.indexOf(item)}>{item}</li>)
  return (<>
    <h5>{label}</h5>
    <ul>{mapped}</ul>
  </>)
}

const House = (props) => {
  const {house} = props;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          { house.name }
        </h5>
        <div className="card-text">
          <dl className="row">
            <HouseDetail label="Region" text={house.region} />
            <HouseDetail label="Coat of Arms" text={house.coatOfArms} />
            <HouseDetail label="Motto" text={house.words} />
          </dl>
          <HouseDetailList label="Titles" items={house.titles} />
        </div>
        <code>
          { JSON.stringify(house) }
        </code>
      </div>
    </div>
  );
};

const mapHouses = (data) => Object.keys(data).map((key) => (
  <House key={key} house={data[key]} />
));

class HouseList extends Component {
  componentDidMount() {
    loadAction().then((data) => {
      this.setState(data);
    });
  }

  render() {
    if (this.state == null) return <div>Loading...</div>;

    return (
      <div className="container">
        <h1>Houses</h1>
        { mapHouses(this.state) }
      </div>
    );
  }
}

export default HouseList;
