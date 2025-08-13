import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';
import React from 'react';

const options = [
  { label: 'Label 1', value: '1' },
  { label: 'Label 2', value: '2' },
  { label: 'Label 3', value: '3' },
];

describe('Select', () => {
  it('opens and selects option (uncontrolled)', async () => {
    const user = userEvent.setup();
    render(<Select id="s1" options={options} placeholder="Select" />);
    const combo = screen.getByRole('combobox');
    await user.click(combo);
    const opt = await screen.findByRole('option', { name: 'Label 2' });
    await user.click(opt);
    expect(screen.getByText('Label 2')).toBeInTheDocument();
  });

  it('calls onChange in controlled mode', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const Wrapper = () => {
      const [v, setV] = React.useState('1');
      return <Select id="s2" options={options} value={v} onChange={(val) => { onChange(val); setV(val); }} />;
    };
    render(<Wrapper />);
    const combo = screen.getByRole('combobox');
    await user.click(combo);
    await user.click(await screen.findByRole('option', { name: 'Label 3' }));
    expect(onChange).toHaveBeenCalledWith('3');
    expect(screen.getByText('Label 3')).toBeInTheDocument();
  });
});

