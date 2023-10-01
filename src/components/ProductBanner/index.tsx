import { Button } from '../';
import { ProductItem } from '../../types/Model';
import { formatPrice } from '../../utils/stringFormat';
import './ProductBanner.scss';

export interface ProductBannerProps {
  item: ProductItem;
}

function ProductBanner({ item }: ProductBannerProps) {
  return (
    <section className="product-banner-container">
      <div className="img-container">
        <img alt={item.title} src={item.picture} />
        <div className="title-container">
          <p className="product-sold">
            {`${item.condition === 'new' ? 'Nuevo' : 'Usado'} `}-
            {` ${item.sold_quantity} vendidos`}
          </p>
          <h1 className="product-title">{item.title}</h1>
          <h3 className="product-price">{formatPrice(item.price)}</h3>
          <Button className="cta-button">Comprar</Button>
        </div>
      </div>

      <div className="description-container">
        <h3 className="description-title">Descripción del producto</h3>
        <p className="description-content">{item.description}</p>
      </div>
    </section>
  );
}

export default ProductBanner;
