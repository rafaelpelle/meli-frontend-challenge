import './Loader.scss';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-spinner" />
      <h4 className="loader-text">Cargando...</h4>
    </div>
  );
}

export default Loader;
