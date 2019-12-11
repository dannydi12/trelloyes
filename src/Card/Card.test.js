import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Card from './Card';

describe('Smoke test', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Card title='homework' content='do it'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });


})