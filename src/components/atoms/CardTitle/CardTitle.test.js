import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CardTitle from './index';

test('CardTitle match to snapshot', () => {
  const component = renderer.create(<CardTitle title="Galactic vibes" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('CardTitle contains Galactic vibes when passed title prop', () => {
  const component = shallow(<CardTitle title="Galactic vibes" />);
  const rendered = <span className="card-title">Galactic vibes</span>;
  expect(component.contains(rendered)).toBeTruthy();
});
