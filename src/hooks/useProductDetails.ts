import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../api/products';
import { ProductDetailsDTO } from '../types/DTO';
import { getErrorMessage } from '../utils/errorHandling';

export function useProductDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [data, setData] = useState<ProductDetailsDTO | null>(null);

  const handleGetProductDetails = useCallback(async () => {
    try {
      if (!id) {
        throw new Error('ID del producto no es válido');
      }

      setIsLoading(true);
      const { data } = await getProductDetails(id);
      setData(data);
      setErrorMsg('');
    } catch (error: unknown) {
      setErrorMsg(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    handleGetProductDetails();
  }, [handleGetProductDetails]);

  return {
    isLoading,
    errorMsg,
    data,
  };
}
