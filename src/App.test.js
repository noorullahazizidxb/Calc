import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders an accessible keypad and adds two numbers', () => {
  render(<App />);
  expect(screen.getByRole('main', { name: 'Calculator' })).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: '2' }));
  userEvent.click(screen.getByRole('button', { name: 'Add' }));
  userEvent.click(screen.getByRole('button', { name: '3' }));
  userEvent.click(screen.getByRole('button', { name: 'Equals' }));
  expect(screen.getByRole('status', { name: 'Result' })).toHaveTextContent('5');
});

test('clear resets the display to zero', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: '9' }));
  userEvent.click(screen.getByRole('button', { name: 'Clear' }));
  expect(screen.getByRole('status', { name: 'Result' })).toHaveTextContent('0');
});

test('accepts input from the physical keyboard', () => {
  render(<App />);
  userEvent.keyboard('12*3{Enter}');
  expect(screen.getByRole('status', { name: 'Result' })).toHaveTextContent('36');
  userEvent.keyboard('{Escape}');
  expect(screen.getByRole('status', { name: 'Result' })).toHaveTextContent('0');
});

test('theme switcher pins and releases the colour scheme', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: 'Dark theme' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(screen.getByRole('button', { name: 'Dark theme' })).toHaveAttribute('aria-pressed', 'true');
  userEvent.click(screen.getByRole('button', { name: 'Match system theme' }));
  expect(document.documentElement).not.toHaveAttribute('data-theme');
});
