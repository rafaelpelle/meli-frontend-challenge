import { useState } from 'react';
import companyLogoSrc from '../../assets/Logo_ML.png';
import companyLogo2xSrc from '../../assets/Logo_ML@2x.png';

function CompanyLogo() {
  const [src, setSrc] = useState(companyLogoSrc);

  return (
    <div className="company-logo-container">
      <a href="/">
        <img
          src={src}
          className="company-logo-img"
          alt="Mercado Libre"
          onLoad={() => {
            if (companyLogo2xSrc.length > src.length) {
              setSrc(companyLogo2xSrc);
            }
          }}
        />
      </a>
    </div>
  );
}

export default CompanyLogo;
