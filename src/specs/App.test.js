import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';


let playGameSpy
test('button click initiates playGame()', () => {
  
  playGameSpy = jest.spyOn(App.prototype, 'playGame')
  render(<App />);
  
  userEvent.click(screen.getByRole('rock'))
  expect(playGameSpy).toHaveBeenCalled(1)
});

// Test result of playGame with mocked implementation.