import FeaturedFoods from "../../Components/FeaturedFoods/FeaturedFoods";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Header/Banner";
import Other from "../Other/Other";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Other></Other>
          <FeaturedFoods></FeaturedFoods>
          <Footer></Footer>
        </div>
    );
};

export default Home;
