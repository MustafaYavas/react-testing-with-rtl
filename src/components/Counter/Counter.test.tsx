import { act, render, screen } from '@testing-library/react';
import Counter from './Counter';
import user from '@testing-library/user-event';

describe('Counter', () => {
  beforeEach(() => {
    user.setup();
  });

  test('renders correctly', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after a clicking the increment butt  on', async () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    await act(async () => await user.click(incrementButton));
    expect(countElement).toHaveTextContent('1');
  });

  test('renders a count of 2 after clicking the increment button twice', async () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    for (let i = 0; i < 2; i++) {
      await act(async () => await user.click(incrementButton));
    }

    expect(countElement).toHaveTextContent('2');
  });

  test('renders a count of 10 after clicking the set button', async () => {
    render(<Counter />);
    const countELement = screen.getByRole('heading');
    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    const amountInput = screen.getByRole('spinbutton');
    await act(async () => await user.type(amountInput, '10'));
    expect(amountInput).toHaveValue(10);

    await act(async () => await user.click(setButton));
    expect(countELement).toHaveTextContent('10');
  });

  test('elements are focused in the r,ght order', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    const amountInput = screen.getByRole('spinbutton');

    await act(async () => await user.tab());
    expect(incrementButton).toHaveFocus();

    await act(async () => await user.tab());
    expect(amountInput).toHaveFocus();

    await act(async () => await user.tab());
    expect(setButton).toHaveFocus();
  });
});
