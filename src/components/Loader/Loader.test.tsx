import { render, screen } from '@testing-library/react';
import Loader from '.';

test('it render Loader', async () => {
  const { container } = render(<Loader />);

  expect(screen.queryByText('Cargando...')).toBeInTheDocument();
  expect(screen.queryByText('Loading...')).toBeNull();
  expect(container.getElementsByClassName('loader-container').length).toBe(1);
  expect(container.getElementsByClassName('loader-spinner').length).toBe(1);
  expect(container.getElementsByClassName('loader-text').length).toBe(1);
});
