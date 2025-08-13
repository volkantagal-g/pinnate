import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('toggles uncontrolled', async () => {
    const user = userEvent.setup();
    render(<Checkbox />);
    const input = screen.getByRole('checkbox');
    expect(input).not.toBeChecked();
    await user.click(input);
    expect(input).toBeChecked();
  });

  it('respects controlled checked', async () => {
    const user = userEvent.setup();
    const Wrapper = () => {
      const [v, setV] = React.useState(false);
      return <Checkbox checked={v} onChange={(e) => setV(e.target.checked)} />;
    };
    render(<Wrapper />);
    const input = screen.getByRole('checkbox');
    await user.click(input);
    expect(input).toBeChecked();
  });
});

