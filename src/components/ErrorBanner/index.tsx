import errorSrc from '../../assets/error.svg';
import './ErrorBanner.scss';

export interface ErrorBannerProps {
  errorMsg: string;
}

function ErrorBanner({ errorMsg }: ErrorBannerProps) {
  return (
    <section className="error-container">
      <img src={errorSrc} alt="Error" />
      <h1>Atención</h1>
      <p>{errorMsg}</p>
    </section>
  );
}

export default ErrorBanner;
