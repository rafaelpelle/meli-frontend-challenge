import { CompanyLogo, SearchField } from '../';
import './NavHeader.scss';

function NavHeader() {
  return (
    <header className="nav-header">
      <CompanyLogo />
      <SearchField />
    </header>
  );
}

export default NavHeader;
