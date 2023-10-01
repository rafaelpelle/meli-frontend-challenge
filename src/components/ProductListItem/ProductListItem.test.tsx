import { render, screen } from '@testing-library/react';
import ProductListItem from '.';
import { getSearchResultsMock } from '../../api/mock';

const product = getSearchResultsMock.items[0];

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}));

test('it render ProductListItem', async () => {
  const { container } = render(<ProductListItem item={product} />);

  expect(screen.queryByText(product.title)).toBeInTheDocument();
  expect(
    container.getElementsByClassName('product-price')[0],
  ).toHaveTextContent('$ 169.599');
  expect(
    container.getElementsByClassName('product-picture')[0],
  ).toHaveAttribute('src', product.picture);
});
