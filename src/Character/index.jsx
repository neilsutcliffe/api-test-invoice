import React, {Component} from 'react';
import request from 'superagent';
import Attribute from '../components/Attribute'
import AttributeList from '../components/AttributeList'

const loadCharacter = (url) => request.get(url)
    .set('Accept', 'application/json')
    .then((res) => JSON.parse(res.text))
    .then((json) => json);

const CharacterDetail = (props) => {
  const { character } = props;

  return (
    <div className="col-lg-12">
        <h4 className="card-title">
          { character.name }
        </h4>
        <Attribute label="Gender" text={character.gender} />
        <Attribute label="Culture" text={character.culture} />
        <Attribute label="Born" text={character.born} />
        <Attribute label="Died" text={character.died} />
        <AttributeList label="Titles" items={character.titles} />
        <code>
          { JSON.stringify(character) }
        </code>
        <hr />
    </div>
  );
};

class Character extends Component {
  constructor(props){
    super(props);
  }

  load() {
    	loadCharacter(this.props.url).then((data) => {
      this.setState(data);
    });
  }

  render() {
    if (this.state == null) 
      return (<div class="row">
        <p>
          <button className="btn btn-primary" 
          onClick={this.load.bind(this)}>{ this.props.url}</button>
        </p>
      </div>)

    return <CharacterDetail character={this.state} />;
  }
}

export default Character;
