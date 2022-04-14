import TopAnnouncement from "../../commons/top-announcement/TopAnnouncement";
import Navbar from "../../commons/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Categories from "./components/categories/Categories";
import PopularProducts from "./components/popular-products/PopularProducts";
import Newsletter from "../../commons/newsletter/Newsletter";
import Footer from "../../commons/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <TopAnnouncement />
      <Slider />
      <Categories />
      <PopularProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
