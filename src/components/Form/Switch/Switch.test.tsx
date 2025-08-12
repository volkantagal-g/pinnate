import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './Switch';

describe('Switch', () => {
  it('toggles', async () => {
    const user = userEvent.setup();
    render(<Switch label="Label" />);
    const track = screen.getByRole('checkbox');
    expect(track).not.toBeChecked();
    await user.click(track);
    expect(track).toBeChecked();
  });
});

