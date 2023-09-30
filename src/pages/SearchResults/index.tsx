import { Loader } from '../../components';
import { useSearchResults } from '../../hooks/useSearchResults';
import './SearchResults.scss';

function SearchResults() {
  const { isLoading, errorMsg, results, search } = useSearchResults();

  return (
    <main>
      {isLoading && <Loader />}
      {errorMsg && (
        <section className="error-container">
          <h1>Atención</h1>
          <p>{errorMsg}</p>
        </section>
      )}
    </main>
  );
}

export default SearchResults;
