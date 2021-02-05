import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

test('button click initiates playGame()', () => {
  render(<App />);
  let spy = jest.spyOn(App, 'playGame("rock")')
  userEvent.click(screen.getByRole('rock'))
  expect(spy).toHaveBeenCalled(1)
});
