import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from  '../pages/Missions';
import configureStore from '../Redux/ConfigureStore';

it('Missions renders correctly', () => {
  const mission = renderer
    .create(<Provider store={configureStore}><Missions /></Provider>)
    .toJSON();
  expect(mission).toMatchSnapshot();
});