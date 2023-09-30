import { Price } from '../types/Model';

export function formatPrice(price: Price) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: price.currency,
    maximumFractionDigits: 0,
  });

  return formatter.format(price.amount);
}
