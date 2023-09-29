import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <h1>SearchResults</h1>
      <p>{searchParams.get('search')}</p>
    </div>
  );
}

export default SearchResults;
