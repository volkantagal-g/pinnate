import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders label', () => {
    render(<Button label="Hello" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});

