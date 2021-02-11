import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';


test('button click initiates playGame()', () => {
  render(<App />);
});
