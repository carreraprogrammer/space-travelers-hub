import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import Rockets from '../pages/Rockets';

it('Renders on the screen', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
  const rocketList = document.screen.getByRole('info');
  expect(rocketList).toBeTruthy();
});