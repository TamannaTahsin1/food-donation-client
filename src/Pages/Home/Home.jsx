import FeaturedFoods from "../../Components/FeaturedFoods/FeaturedFoods";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Header/Banner";
import Other from "../Other/Other";
import Support from "../Support/Support";
import Teams from "../Teams/Teams";

const Home = () => {
  return (
    <div className='space-y-32'>
      <Banner></Banner>
      <Other></Other>
      <FeaturedFoods></FeaturedFoods>
      <Support></Support>
      <Teams></Teams>
      <Footer></Footer>
    </div>
  );
};

export default Home;
