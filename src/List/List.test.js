import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


describe('Smoke test', () => {
  const store = [
    { id: "a", title: "First card", content: "lorem ipsum" },
    { id: "b", title: "Second card", content: "lorem ipsum" },
    { id: "e", title: "Fifth card", content: "lorem ipsum" },
    { id: "f", title: "Sixth card", content: "lorem ipsum" },
    { id: "g", title: "Seventh card", content: "lorem ipsum" },
    { id: "j", title: "Tenth card", content: "lorem ipsum" },
    { id: "l", title: "Twelfth card", content: "lorem ipsum" },
    { id: "m", title: "Thirteenth card", content: "lorem ipsum" }
  ];
  
  it('component mounts', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={0} header="header" cards={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('check against at snapshot', () => {
    const tree = renderer.create(<List key={0} header="header" cards={store} />).toJSON();

    expect(tree).toMatchSnapshot();

  });
});