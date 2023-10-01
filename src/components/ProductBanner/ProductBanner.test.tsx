import { render, screen } from '@testing-library/react';
import ProductListItem from '.';
import { getProductDetailsMock } from '../../api/mock';

const product = getProductDetailsMock.item;

test('it render ProductBanner', async () => {
  const { container } = render(<ProductListItem item={product} />);

  expect(screen.queryByText(product.title)).toBeInTheDocument();
  expect(
    container.getElementsByClassName('product-price')[0],
  ).toHaveTextContent('$ 169.599');
  expect(screen.getByRole('img')).toHaveAttribute('src', product.picture);
  expect(screen.getByRole('button')).toHaveAttribute(
    'class',
    'btn primary-btn cta-button',
  );
  expect(screen.getByRole('button')).toHaveTextContent('Comprar');
  expect(screen.queryByText('Descripción del producto')).toBeInTheDocument();
  expect(screen.queryByText(product.description as string)).toBeInTheDocument();
});
