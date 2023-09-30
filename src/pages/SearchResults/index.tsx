import { Fragment } from 'react';
import { Loader, ProductListItem } from '../../components';
import { useSearchResults } from '../../hooks/useSearchResults';
import './SearchResults.scss';

function SearchResults() {
  const { isLoading, errorMsg, results } = useSearchResults();

  return (
    <main className="search-results-container">
      {isLoading && <Loader />}
      {errorMsg && (
        <section className="error-container">
          <h1>Atención</h1>
          <p>{errorMsg}</p>
        </section>
      )}

      {!isLoading && !errorMsg && results?.items.length && (
        <Fragment>
          <div className="results-breadcrumbs">
            Electrónica, Audio y Video / iPod / Reproductores / iPod touch / 32
            GB
          </div>

          <section className="results-container">
            {results.items.map((item, index) => (
              <Fragment key={index}>
                <ProductListItem item={item} />
                {index < results.items.length - 1 && <hr />}
              </Fragment>
            ))}
          </section>
        </Fragment>
      )}
    </main>
  );
}

export default SearchResults;
