import { render, screen } from '@testing-library/react';
import { InputHint } from './InputHint';

describe('InputHint', () => {
  it('renders text', () => {
    render(<InputHint text="Help" />);
    expect(screen.getByText('Help')).toBeInTheDocument();
  });
});

