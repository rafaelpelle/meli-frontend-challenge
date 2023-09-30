import { Fragment } from 'react';
import { Breadcrumbs, Button, ErrorBanner, Loader } from '../../components';
import { useProductDetails } from '../../hooks/useProductDetails';
import { formatPrice } from '../../utils/stringFormat';
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

          <section className="data-container">
            <div className="img-container">
              <img alt={data.item.title} src={data.item.picture} />
              <div className="title-container">
                <p className="product-sold">
                  {`${data.item.condition === 'new' ? 'Nuevo' : 'Usado'} `}-
                  {` ${data.item.sold_quantity} vendidos`}
                </p>
                <h1 className="product-title">{data.item.title}</h1>
                <h3 className="product-price">
                  {formatPrice(data.item.price)}
                </h3>
                <Button className="cta-button">Comprar</Button>
              </div>
            </div>

            <div className="description-container">
              <h3 className="description-title">Descripción del producto</h3>
              <p className="description-content">{data.item.description}</p>
            </div>
          </section>
        </Fragment>
      )}
    </main>
  );
}

export default ProductDetails;
