import freeShippingIcon from '../../assets/ic_shipping.png';
import { ProductItem } from '../../types/Model';
import { formatPrice } from '../../utils/stringFormat';
import './ProductListItem.scss';

export interface ProductListItemProps {
  item: ProductItem;
}

function ProductListItem({ item }: ProductListItemProps) {
  return (
    <div className="product-list-item">
      <img className="product-picture" src={item.picture} alt={item.title} />
      <div>
        <div className="product-price-container">
          <p className="product-price">{formatPrice(item.price)}</p>
          {item.free_shipping && (
            <img
              className="product-shipping-icon"
              src={freeShippingIcon}
              alt="Free shipping icon"
            />
          )}
        </div>
        <p className="product-title">{item.title}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
