import FeaturedFoods from "../../Components/FeaturedFoods/FeaturedFoods";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Header/Banner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <FeaturedFoods></FeaturedFoods>
          <Footer></Footer>
        </div>
    );
};

export default Home;