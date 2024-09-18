
import Navbar from "../assets/components/Navbar";
import Carousel from "../assets/components/Carousel";
import Category from "../assets/components/Category";
// import Product from "../assets/components/Product";
import Sale from "../assets/components/Sale";
import Trending from "../assets/components/Trending";
import Recomended from "../assets/components/Recomended";
import ListProduct from "../assets/components/LisTproduct";
import Footer from "../assets/components/Footer";

const Home = () => {
 
  return (
    <div className="  px-7">
      <Navbar></Navbar>
      <Carousel />
      <Category></Category>
      {/* <Product></Product> */}
      <Sale> </Sale>
      <Trending></Trending>
      <Recomended/>
      <ListProduct/>
      <Footer/>
    </div>
  );
};

export default Home;
