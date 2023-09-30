import companyLogoSrc from '../../assets/Logo_ML.png';

function CompanyLogo() {
  return (
    <div className="company-logo-container">
      <img
        className="company-logo-img"
        src={companyLogoSrc}
        alt="Mercado Livre"
      />
    </div>
  );
}

export default CompanyLogo;
