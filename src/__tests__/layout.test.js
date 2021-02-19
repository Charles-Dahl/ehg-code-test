import { render, screen } from '@testing-library/react';
import Layout from '../components/layout';

test('renders layout', () => {
    const layoutText = <p>Test Layout</p>;
  render(<Layout>{layoutText}</Layout>);
  const text = screen.getByText(/Test Layout/i);
  expect(text).toBeInTheDocument();
});
