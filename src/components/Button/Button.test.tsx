import { render, screen } from '@testing-library/react';
import Button from '.';

test('it render primary Button', async () => {
  const { container } = render(<Button>Test</Button>);
  const childrenElem = screen.queryByText('Test');

  expect(container.querySelectorAll('button').length).toBe(1);
  expect(container.getElementsByClassName('primary-btn').length).toBe(1);
  expect(container.getElementsByClassName('secondary-btn').length).toBe(0);
  expect(childrenElem).toBeInTheDocument();
});

test('it render secondary Button', async () => {
  const { container } = render(<Button variant="secondary">Test</Button>);
  const childrenElem = screen.queryByText('Test');

  expect(container.querySelectorAll('button').length).toBe(1);
  expect(container.getElementsByClassName('primary-btn').length).toBe(0);
  expect(container.getElementsByClassName('secondary-btn').length).toBe(1);
  expect(childrenElem).toBeInTheDocument();
});
