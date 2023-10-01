import { render, screen } from '@testing-library/react';
import CompanyLogo from '.';

test('it render CompanyLogo', async () => {
  const { container } = render(<CompanyLogo />);
  expect(container.getElementsByClassName('company-logo-img').length).toBe(1);
  expect(screen.getByRole('link')).toHaveAttribute('href', '/');
});
