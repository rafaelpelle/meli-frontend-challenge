import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchResults } from '../api/products';
import { SearchResultsDTO } from '../types/DTO';
import { getErrorMessage } from '../utils/errorHandling';

export function useSearchResults() {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [results, setResults] = useState<SearchResultsDTO | null>(null);

  const handleGetSearchResults = useCallback(async () => {
    try {
      const search = searchParams.get('search');
      if (!search) {
        throw new Error('Formulario de búsqueda no es válido');
      }

      setIsLoading(true);
      const data = await getSearchResults(search);
      setResults(data);
    } catch (error: unknown) {
      setErrorMsg(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    handleGetSearchResults();
  }, [handleGetSearchResults, searchParams]);

  return {
    isLoading,
    errorMsg,
    results,
    search: searchParams.get('search'),
  };
}
