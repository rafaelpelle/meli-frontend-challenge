import { render, screen } from '@testing-library/react';
import Breadcrumbs from './';

const categories = ['Computación', 'Laptops y Accesorios', 'Notebooks'];

test('render Breadcrumbs without categories', async () => {
  const { container } = render(<Breadcrumbs categories={[]} />);
  const firstCategory = screen.queryByText(categories[0]);
  const secondCategory = screen.queryByText(categories[1]);
  const thirdCategory = screen.queryByText(categories[2]);

  expect(container.querySelectorAll('li').length).toBe(0);
  expect(firstCategory).toBeNull();
  expect(secondCategory).toBeNull();
  expect(thirdCategory).toBeNull();
});

test('render Breadcrumbs with categories', async () => {
  const { container } = render(<Breadcrumbs categories={categories} />);
  const firstCategory = screen.queryByText(categories[0]);
  const secondCategory = screen.queryByText(categories[1]);
  const thirdCategory = screen.queryByText(categories[2]);

  expect(container.querySelectorAll('li').length).toBe(3);
  expect(firstCategory).toBeInTheDocument();
  expect(secondCategory).toBeInTheDocument();
  expect(thirdCategory).toBeInTheDocument();
});
