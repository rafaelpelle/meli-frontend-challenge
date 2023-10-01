import { render, screen } from '@testing-library/react';
import ErrorBanner from '.';

test('it render ErrorBanner with text', async () => {
  const { container } = render(
    <ErrorBanner errorMsg="Request failed with status code 500" />,
  );

  expect(screen.queryByText('Atención')).toBeInTheDocument();
  expect(
    screen.queryByText('Request failed with status code 500'),
  ).toBeInTheDocument();
  expect(container.querySelectorAll('img').length).toBe(1);
  expect(container.querySelectorAll('h1').length).toBe(1);
  expect(container.querySelectorAll('p').length).toBe(1);
});

test('it render ErrorBanner without text', async () => {
  const { container } = render(<ErrorBanner errorMsg="" />);

  expect(screen.queryByText('Atención')).toBeInTheDocument();
  expect(screen.queryByText('Request failed with status code 500')).toBeNull();
  expect(container.querySelectorAll('img').length).toBe(1);
  expect(container.querySelectorAll('h1').length).toBe(1);
  expect(container.querySelectorAll('p').length).toBe(1);
});
