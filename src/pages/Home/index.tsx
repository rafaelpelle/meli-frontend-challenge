import findSrc from '../../assets/find.svg';
import './Home.scss';

function HomePage() {
  return (
    <div className="home-container">
      <img src={findSrc} alt="Find" />
    </div>
  );
}

export default HomePage;
