import { Fragment } from 'react';
import {
  Breadcrumbs,
  ErrorBanner,
  Loader,
  ProductBanner,
} from '../../components';
import { useProductDetails } from '../../hooks/useProductDetails';
import './ProductDetails.scss';

function ProductDetails() {
  const { isLoading, errorMsg, data } = useProductDetails();

  return (
    <main className="product-details-container">
      {isLoading && <Loader />}
      {errorMsg && <ErrorBanner errorMsg={errorMsg} />}

      {!isLoading && !errorMsg && data && (
        <Fragment>
          <Breadcrumbs categories={data.categories} />
          <ProductBanner item={data.item} />
        </Fragment>
      )}
    </main>
  );
}

export default ProductDetails;
