import { render, screen } from '@testing-library/react';
import Button from '../components/button';

test('renders button', () => {
    const buttonText = 'Hello';
  render(<Button>{buttonText}</Button>);
  const text = screen.getByText(/Hello/i);
  expect(text).toBeInTheDocument();
});
