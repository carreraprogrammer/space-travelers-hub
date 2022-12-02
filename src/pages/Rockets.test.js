import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../components/Redux/ConfigureStore/ConfigureStore';
import Rockets from './rockets';

it('Renders on the screen', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
  const rocketList = document.screen.getByRole('info');
  expect(rocketList).toBeTruthy();
});
