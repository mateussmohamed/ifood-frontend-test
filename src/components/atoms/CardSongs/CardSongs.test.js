import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CardSongs from './index';

test('CardSongs match to snapshot', () => {
  const component = renderer.create(<CardSongs songs={234} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('CardSongs contains 29 songs when passed songs prop', () => {
  const component = shallow(<CardSongs songs={29} />);
  const rendered = <span className="card-song">29 Songs</span>;
  expect(component.contains(rendered)).toBeTruthy();
});
