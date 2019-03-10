import React, {Component} from 'react';
import Character from '../Character';
import Attribute from '../components/Attribute'
import AttributeList from '../components/AttributeList'

const CharacterList = ({label, characters}) => {
  if (characters.length == 0 || characters[0] == "") return null;

  const mapped = characters.map((character) => <Character url={character} key={characters.indexOf(character)} />)
  return (<>
    <h3>Characters</h3>
    <ul>{mapped}</ul>
  </>)
}

const House = (props) => {
  const {house} = props;

  return (
    <div className="col-lg-12">
      <h2 className="card-title">
        { house.name }
      </h2>
        <dl className="row">
          <Attribute label="Region" text={house.region} />
          <Attribute label="Coat of Arms" text={house.coatOfArms} />
          <Attribute label="Motto" text={house.words} />
        </dl>
        <AttributeList label="Titles" items={house.titles} />
        <CharacterList characters={house.swornMembers} />
      <code>
        { JSON.stringify(house) }
      </code>
      <hr />
    </div>
  );
};

export default House;
