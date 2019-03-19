import React from 'react';
import ReactDOM from 'react-dom';
import HouseList from './HouseList';
import config from './config';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HouseList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// This should probably call a shared API library, for now we just call the endpoint here.
it('verify api returns at least one house', async () => {
  expect.assertions(1);
  
  await fetch(config.endpoint)
  .then(response => response.json())
  .then(data => expect(data.length).toBeGreaterThanOrEqual(1))
})
