import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>ProductDetails</h1>
      <p>{id}</p>
    </div>
  );
}

export default ProductDetails;
