import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import freeShippingIcon from '../../assets/ic_shipping.png';
import freeShipping2xIcon from '../../assets/ic_shipping@2x.png';
import { ProductItem } from '../../types/Model';
import { formatPrice } from '../../utils/stringFormat';
import './ProductListItem.scss';

export interface ProductListItemProps {
  item: ProductItem;
}

function ProductListItem({ item }: ProductListItemProps) {
  const [shippingIconSrc, setShippingIconSrc] = useState(freeShippingIcon);
  const navigate = useNavigate();

  return (
    <div
      className="product-list-item"
      onClick={() => {
        navigate(`/items/${item.id}`);
      }}
    >
      <img className="product-picture" src={item.picture} alt={item.title} />
      <div>
        <div className="product-price-container">
          <p className="product-price">{formatPrice(item.price)}</p>
          {item.free_shipping && (
            <img
              className="product-shipping-icon"
              alt="Free shipping icon"
              src={shippingIconSrc}
              onLoad={() => {
                if (freeShipping2xIcon.length > shippingIconSrc.length) {
                  setShippingIconSrc(freeShipping2xIcon);
                }
              }}
            />
          )}
        </div>
        <p className="product-title">{item.title}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
