import Row from '../components/Row';
import requests from '../utils/Requests';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
  <div>
      <Navbar />
      <Banner />

      {/* title */}
      {/* container -> movies posters*/}
        {/* <Row title="NetflixOriginal" fetchURL={requests.NetflixOriginal}/> */}
        <Row title="Now Playing" fetchURL={requests.NowPlaying}
        isLargeRow/>
        <Row title="Trending" fetchURL={requests.Trending}/>
        <Row title="Popular" fetchURL={requests.Popular}/>
        <Row title="TopRated" fetchURL={requests.TopRated}/>
        <Row title="Horror" fetchURL={requests.Horror} />

    </div>
  );
}

export default Home
